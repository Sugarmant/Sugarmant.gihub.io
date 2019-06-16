function TTTime(objName){
            var WeekS = ' 星期'+'日一二三四五六'.charAt(new Date().getDay());
            var date  = new Date();
            var DateS = date.getFullYear() + '年' + (date.getMonth()+1) + '月' + date.getDate() + '日 ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
            var TimeS = DateS + WeekS;
            document.getElementById(objName).innerHTML = TimeS;
        }
        TTTime('time');
        setInterval("TTTime('time')",1000);
