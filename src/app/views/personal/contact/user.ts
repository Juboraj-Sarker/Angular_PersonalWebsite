export class User {
    constructor(
        public name: string,
        public email: string,
        public phone: string,
        public message : string,
        public topic: string,
        public timePreference: string,
        public subscribe: boolean
    ) {
        
    }
}