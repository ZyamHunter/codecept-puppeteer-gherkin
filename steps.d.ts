/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('./pages/home.js');
type result_listPage = typeof import('./pages/result_list.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage: homePage, result_listPage: result_listPage }
  interface Methods extends Puppeteer {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
