const base = {
    get() {
        return {
            url : "http://localhost:8080/daxueshengxuanxiuxuanke/",
            name: "daxueshengxuanxiuxuanke",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/daxueshengxuanxiuxuanke/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "大学生选修选课系统"
        } 
    }
}
export default base
