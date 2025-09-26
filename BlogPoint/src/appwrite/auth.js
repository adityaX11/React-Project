/* eslint-disable no-useless-catch */

// this whole code is for auth for users.
import conf from "../conf/conf";
import {Client,Account,ID} from "appwrite"

export class AuthService{  //This is an ES6 class. Instead of scattering functions, you wrap all auth-related logic into one service class (cleaner + reusable).
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account=new Account(this.client);
    }

    async createAccount({email,password,name}){
        try {
            const userAccount=await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                // call another method like redirect the login page.
                return this.login({email,password});
            }
            else{
                return userAccount;
            }
        } catch (error) { // here may be problem
            throw error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);

        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error",error);
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error",error);
        }
    }
}

const authsService=new AuthService();
export default authsService;