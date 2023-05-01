export namespace Login {
  export interface ReqLoginByWxWorkForm {
    school_id: string;
    app_id: string;
    code: string;
  }
  export interface ReqLoginByMobileForm {
    school_id: string;
    role: string;
    mobile: string;
    captcha: string;
  }
  export interface ResLogin {
    access_token: string;
  }
  export interface ResAuthButtons {
    [key: string]: string[];
  }
}
