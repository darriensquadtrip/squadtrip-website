import Script from "next/script";
import { INTERCOM_APP_ID } from "@/lib/constants";

export function IntercomWidget() {
  if (!INTERCOM_APP_ID) return null;

  return (
    <Script id="intercom-widget" strategy="lazyOnload">
      {`
        (function(){
          var loaded = false;
          function loadIntercom() {
            if (loaded) return;
            loaded = true;
            window.intercomSettings = { api_base: "https://api-iam.intercom.io", app_id: "${INTERCOM_APP_ID}" };
            var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${INTERCOM_APP_ID}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}
          }
          // Delay Intercom until user interaction or 5 seconds
          var events = ['scroll','click','touchstart','mousemove'];
          events.forEach(function(e){document.addEventListener(e, loadIntercom, {once:true,passive:true});});
          setTimeout(loadIntercom, 5000);
        })();
      `}
    </Script>
  );
}
