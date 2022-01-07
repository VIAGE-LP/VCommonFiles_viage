// 55248 start

    getAcs_GA();

    function getAcs_GA(){
        if (document.getElementById("lp_form") == null) {
            setTimeout(getAcs_GA, 1000);
            return;
        }
        var url_string = window.location.href;
        var url = new URL(url_string);

        var ga1 = 'acs_ga1=' + url.searchParams.get('utm_source');
        var ga2 = 'acs_ga2=' + url.searchParams.get('utm_medium');
        var ga3 = 'acs_ga3=' + url.searchParams.get('utm_campaign');

        if ( ga1.split('=')[1] != 'null'){
            document.getElementById('submitBtn').addEventListener("click", function(){
                document.cookie= ga1 + '; path=/';
                document.cookie= ga2 + '; path=/';
                document.cookie= ga3 + '; path=/';
            });
        }
    }

// 55248