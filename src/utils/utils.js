export default {
    /**
     *
     * @param time 传入的时间
     * @returns {string} 返回年月日字符串
     */
    formatDate(time) {
        if (!time) {
            return ''
        }
        var date = new Date(time);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? "0" + m : m;
        var d = date.getDate();
        d = d < 10 ? "0" + d : d;
        var h = date.getHours();
        h = h < 10 ? "0" + h : h;
        var minute = date.getMinutes();
        var second = date.getSeconds();
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;
        return y + "-" + m + "-" + d;
    },

    /**
     *
     * @param time 传入的时间
     * @returns {string} 返回年月日时间字符串
     */
    formatDateTime(time) {
        if (!time) {
            return ''
        }
        var date = new Date(time);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? "0" + m : m;
        var d = date.getDate();
        d = d < 10 ? "0" + d : d;
        var h = date.getHours();
        h = h < 10 ? "0" + h : h;
        var minute = date.getMinutes();
        var second = date.getSeconds();
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;
        return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
    },

    pagination(data, callback) {
        return  {
            onChange: current => {
                callback(current);
            },
            // current: data.page,
            pageSize: data.pageSize,
            total: data.total,
            showTotal: () => {
                return `共${data.total}条`;
            },
            showQuickJumper: true
        }
    }
}