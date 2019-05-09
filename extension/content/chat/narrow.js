; (function () {

  if (window.top === window) return;

  const css = `
#app { --yawf-left-width: 240px; --yawf-text-height: 100px; }
#app .chat { overflow: hidden; }
#app .chat .chatbox { width: 100vw; margin: 0; }
#app .chat .chatbox .msglist { width: var(--yawf-left-width); border-radius: 0; }
#app .user { height: 0px; }
#app .user .left { display: none; }
#app .user .right { position: absolute; top: 5px; left: calc(100% - 70px); }
#app .user .settings { top: 35px; right: 7px; }
#app .user .settings li:last-child { display: none; }  
#app .search { padding: 4px 0; height: 26px; line-height: 30px; }
#app .search .search-wrapper { width: calc(100% - 80px); }
#app .searchlist { top: 35px; }
#app .searchlist .searchlist-box { width: var(--yawf-left-width); }
#app .searchlist .searchlist-box .contactslist .title { margin: 4px 0 2px 10px; }
#app .searchlist .searchlist-box .contactslist .sessionlist { height: 50px; }
#app .searchlist .searchlist-box .contactslist .sessionlist .list-left .avatar { width: 40px; height: 40px; margin: 0 10px; }
#app .chatlist { top: 35px; }
#app .chatlist .chatlist-box { width: var(--yawf-left-width); }
#app .chatlist .chatlist-box ul { overflow-x: hidden; }
#app .chatlist .chatlist-box .contactslist .sessionlist { height: 50px; }
#app .chatlist .chatlist-box .contactslist .sessionlist .line { height: 50px; }
#app .chatlist .chatlist-box .contactslist .sessionlist .list-left .avatar { width: 40px; height: 40px; margin: 0 10px; }
#app .chatlist .chatlist-box .contactslist .sessionlist .list-right { height: 40px; }
#app .chatlist .chatlist-box .contactslist .sessionlist .list-right .content-top { height: 18px; line-height: 18px; }
#app .chatlist .chatlist-box .contactslist .sessionlist .list-right .content-bottom { height: 18px; line-height: 18px; max-width: calc(var(--yawf-left-width) - 75px); }
#app .chatlist .chatlist-box .contactslist .sessionlist .list-right .content-bottom .lastmsg { font-size: 12px; }
#app .chatbox > .right { left: var(--yawf-left-width); right: 0; width: auto !important; }
#app .message { bottom: var(--yawf-text-height); }
#app .message .header { height: 40px; line-height: 40px; }
#app .message .header .moresets { top: 40px; }
#app .message .tips { top: 40px; }
#app .message .message-wrapper { top: 40px; }
#app .message .tips.unfollowtips + .message-wrapper { top: 74px; }
#app .message .message-wrapper .chat-content { width: calc(100vw - calc(1px + var(--yawf-left-width))); }
#app .text { height: var(--yawf-text-height); }
#app .atwho-wrap .editor { height: 70px; }
#app .text .sendbox_prompt { display: none; }
#app .login { display: none; }
`;
  const style = document.createElement('style');
  style.textContent = css;
  (document.head || document.body || document.documentElement).appendChild(style);

}());