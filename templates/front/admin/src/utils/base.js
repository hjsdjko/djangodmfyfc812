const base = {
    get() {
        return {
            url : "http://localhost:8080/djangodmfyfc81/",
            name: "djangodmfyfc81",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Python的智能停车系统的设计与实现"
        } 
    }
}
export default base
