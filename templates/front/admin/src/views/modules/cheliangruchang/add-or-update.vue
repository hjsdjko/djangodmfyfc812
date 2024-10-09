<template>
	<div class="addEdit-block" :style='{"padding":"30px","fontSize":"14px","color":"#666","background":"none"}'>
		<el-form
			:style='{"border":"0px solid #bababa","padding":"30px 30px 20px","boxShadow":"0 1px 0px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.24)","borderRadius":"0px","alignItems":"flex-start","flexWrap":"wrap","background":"rgba(255,255,255,1)","display":"flex","fontSize":"inherit"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="150px"
		>
			<template >
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'" label="入场编号" prop="ruchangbianhao">
					<el-input v-model="ruleForm.ruchangbianhao" placeholder="入场编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="input" v-else-if="ruleForm.ruchangbianhao" label="入场编号" prop="ruchangbianhao">
					<el-input v-model="ruleForm.ruchangbianhao" placeholder="入场编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="车位编号" prop="cheweibianhao">
					<el-input v-model="ruleForm.cheweibianhao" placeholder="车位编号" clearable  :readonly="ro.cheweibianhao"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' v-else class="input" label="车位编号" prop="cheweibianhao">
					<el-input v-model="ruleForm.cheweibianhao" placeholder="车位编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="车位位置" prop="cheweiweizhi">
					<el-input v-model="ruleForm.cheweiweizhi" placeholder="车位位置" clearable  :readonly="ro.cheweiweizhi"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' v-else class="input" label="车位位置" prop="cheweiweizhi">
					<el-input v-model="ruleForm.cheweiweizhi" placeholder="车位位置" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="upload" v-if="type!='info' && !ro.cheweitupian" label="车位图片" prop="cheweitupian">
					<file-upload
						tip="点击上传车位图片"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.cheweitupian?ruleForm.cheweitupian:''"
						@change="cheweitupianUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="upload" v-else-if="ruleForm.cheweitupian" label="车位图片" prop="cheweitupian">
					<img v-if="ruleForm.cheweitupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.cheweitupian.split(',')[0]" width="100" height="100">
					<img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.cheweitupian.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="每小时价" prop="meixiaoshijia">
					<el-input-number v-model="ruleForm.meixiaoshijia" placeholder="每小时价" :readonly="ro.meixiaoshijia"></el-input-number>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' v-else class="input" label="每小时价" prop="meixiaoshijia">
					<el-input v-model="ruleForm.meixiaoshijia" placeholder="每小时价" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="车牌号" prop="chepaihao">
					<el-input v-model="ruleForm.chepaihao" placeholder="车牌号" clearable  :readonly="ro.chepaihao"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' v-else class="input" label="车牌号" prop="chepaihao">
					<el-input v-model="ruleForm.chepaihao" placeholder="车牌号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="车主号" prop="chezhuhao">
					<el-input v-model="ruleForm.chezhuhao" placeholder="车主号" clearable  :readonly="ro.chezhuhao"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' v-else class="input" label="车主号" prop="chezhuhao">
					<el-input v-model="ruleForm.chezhuhao" placeholder="车主号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="车主姓名" prop="chezhuxingming">
					<el-input v-model="ruleForm.chezhuxingming" placeholder="车主姓名" clearable  :readonly="ro.chezhuxingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' v-else class="input" label="车主姓名" prop="chezhuxingming">
					<el-input v-model="ruleForm.chezhuxingming" placeholder="车主姓名" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="input" v-if="type!='info'"  label="手机号码" prop="shoujihaoma">
					<el-input v-model="ruleForm.shoujihaoma" placeholder="手机号码" clearable  :readonly="ro.shoujihaoma"></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' v-else class="input" label="手机号码" prop="shoujihaoma">
					<el-input v-model="ruleForm.shoujihaoma" placeholder="手机号码" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="date" v-if="type!='info'" label="入场时间" prop="ruchangshijian">
					<el-date-picker
						value-format="yyyy-MM-dd HH:mm:ss"
						v-model="ruleForm.ruchangshijian" 
						type="datetime"
						:readonly="ro.ruchangshijian"
						placeholder="入场时间"
					></el-date-picker>
				</el-form-item>
				<el-form-item :style='{"border":"0px solid #eee","padding":"20px 0","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"0 0 2px 0","color":"inherit","borderRadius":"0px","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","width":"100%","fontSize":"inherit"}' class="input" v-else-if="ruleForm.ruchangshijian" label="入场时间" prop="ruchangshijian">
					<el-input v-model="ruleForm.ruchangshijian" placeholder="入场时间" readonly></el-input>
				</el-form-item>
			</template>
			<el-form-item :style='{"padding":"10px 0 20px","boxShadow":"0 1px 1px rgba(0,0,0,0.1)","margin":"30px 0","alignItems":"center","textAlign":"center","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,243,244,.5) 100%)","display":"flex","width":"100%","perspective":"320px","-webkitPerspective":"320px","fontSize":"48px","justifyContent":"flex-start"}' class="btn">
				<el-button class="btn3"  v-if="type!='info'" type="success" @click="onSubmit">
					<span class="icon iconfont icon-tijiao16" :style='{"margin":"0 2px","fontSize":"18px","color":"inherit","display":"none"}'></span>
					保存
				</el-button>
				<el-button class="btn4" v-if="type!='info'" type="success" @click="back()">
					<span class="icon iconfont icon-quxiao09" :style='{"margin":"0 2px","fontSize":"18px","color":"inherit","display":"none"}'></span>
					取消
				</el-button>
				<el-button class="btn5" v-if="type=='info'" type="success" @click="back()">
					<span class="icon iconfont icon-fanhui01" :style='{"margin":"0 2px","fontSize":"18px","color":"inherit","display":"none"}'></span>
					返回
				</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				ruchangbianhao : false,
				cheweibianhao : false,
				cheweiweizhi : false,
				cheweitupian : false,
				meixiaoshijia : false,
				chepaihao : false,
				chezhuhao : false,
				chezhuxingming : false,
				shoujihaoma : false,
				ruchangshijian : false,
				sfsh : false,
				shhf : false,
			},
			
			
			ruleForm: {
				ruchangbianhao: this.getUUID(),
				cheweibianhao: '',
				cheweiweizhi: '',
				cheweitupian: '',
				meixiaoshijia: '',
				chepaihao: '',
				chezhuhao: '',
				chezhuxingming: '',
				shoujihaoma: '',
				ruchangshijian: '',
				shhf: '',
			},
		

			
			rules: {
				ruchangbianhao: [
				],
				cheweibianhao: [
				],
				cheweiweizhi: [
				],
				cheweitupian: [
				],
				meixiaoshijia: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				chepaihao: [
				],
				chezhuhao: [
				],
				chezhuxingming: [
				],
				shoujihaoma: [
				],
				ruchangshijian: [
				],
				sfsh: [
				],
				shhf: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {



	},
    components: {
    },
	created() {
		this.ruleForm.ruchangshijian = this.getCurDateTime()
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='ruchangbianhao'){
							this.ruleForm.ruchangbianhao = obj[o];
							this.ro.ruchangbianhao = true;
							continue;
						}
						if(o=='cheweibianhao'){
							this.ruleForm.cheweibianhao = obj[o];
							this.ro.cheweibianhao = true;
							continue;
						}
						if(o=='cheweiweizhi'){
							this.ruleForm.cheweiweizhi = obj[o];
							this.ro.cheweiweizhi = true;
							continue;
						}
						if(o=='cheweitupian'){
							this.ruleForm.cheweitupian = obj[o];
							this.ro.cheweitupian = true;
							continue;
						}
						if(o=='meixiaoshijia'){
							this.ruleForm.meixiaoshijia = obj[o];
							this.ro.meixiaoshijia = true;
							continue;
						}
						if(o=='chepaihao'){
							this.ruleForm.chepaihao = obj[o];
							this.ro.chepaihao = true;
							continue;
						}
						if(o=='chezhuhao'){
							this.ruleForm.chezhuhao = obj[o];
							this.ro.chezhuhao = true;
							continue;
						}
						if(o=='chezhuxingming'){
							this.ruleForm.chezhuxingming = obj[o];
							this.ro.chezhuxingming = true;
							continue;
						}
						if(o=='shoujihaoma'){
							this.ruleForm.shoujihaoma = obj[o];
							this.ro.shoujihaoma = true;
							continue;
						}
						if(o=='ruchangshijian'){
							this.ruleForm.ruchangshijian = obj[o];
							this.ro.ruchangshijian = true;
							continue;
						}
				}
			}
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					var json = data.data;
					if(((json.chepaihao!=''&&json.chepaihao) || json.chepaihao==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.chepaihao = json.chepaihao
						this.ro.chepaihao = true;
					}
					if(((json.chezhuhao!=''&&json.chezhuhao) || json.chezhuhao==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.chezhuhao = json.chezhuhao
						this.ro.chezhuhao = true;
					}
					if(((json.chezhuxingming!=''&&json.chezhuxingming) || json.chezhuxingming==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.chezhuxingming = json.chezhuxingming
						this.ro.chezhuxingming = true;
					}
					if(((json.shoujihaoma!=''&&json.shoujihaoma) || json.shoujihaoma==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.shoujihaoma = json.shoujihaoma
						this.ro.shoujihaoma = true;
					}
				} else {
					this.$message.error(data.msg);
				}
			});
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `cheliangruchang/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {
		if(this.ruleForm.ruchangbianhao) {
			this.ruleForm.ruchangbianhao = String(this.ruleForm.ruchangbianhao)
		}
	if(this.ruleForm.cheweitupian!=null) {
		this.ruleForm.cheweitupian = this.ruleForm.cheweitupian.replace(new RegExp(this.$base.url,"g"),"");
	}
var objcross = this.$storage.getObj('crossObj');
      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
		this.$refs["ruleForm"].validate(valid => {
			if (valid) {
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid = crossuserid;
					this.ruleForm.crossrefid = crossrefid;
					let params = { 
						page: 1, 
						limit: 10, 
						crossuserid:this.ruleForm.crossuserid,
						crossrefid:this.ruleForm.crossrefid,
					} 
				this.$http({ 
					url: "cheliangruchang/page", 
					method: "get", 
					params: params 
				}).then(({ 
					data 
				}) => { 
					if (data && data.code === 0) { 
						if(data.data.total>=crossoptnum) {
							this.$message.error(this.$storage.get('tips'));
							return false;
						} else {
							this.$http({
								url: `cheliangruchang/${!this.ruleForm.id ? "save" : "update"}`,
								method: "post",
								data: this.ruleForm
							}).then(({ data }) => {
								if (data && data.code === 0) {
									this.$message({
										message: "操作成功",
										type: "success",
										duration: 1500,
										onClose: () => {
											this.parent.showFlag = true;
											this.parent.addOrUpdateFlag = false;
											this.parent.cheliangruchangCrossAddOrUpdateFlag = false;
											this.parent.search();
											this.parent.contentStyleChange();
										}
									});
								} else {
									this.$message.error(data.msg);
								}
							});

						}
					} else { 
				} 
			});
		} else {
			this.$http({
				url: `cheliangruchang/${!this.ruleForm.id ? "save" : "update"}`,
				method: "post",
			   data: this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "操作成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.parent.showFlag = true;
							this.parent.addOrUpdateFlag = false;
							this.parent.cheliangruchangCrossAddOrUpdateFlag = false;
							this.parent.search();
							this.parent.contentStyleChange();
						}
					});
				} else {
					this.$message.error(data.msg);
			   }
			});
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.cheliangruchangCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    cheweitupianUploadChange(fileUrls) {
	    this.ruleForm.cheweitupian = fileUrls;
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: #333;
	  	  font-weight: 500;
	  	  display: inline-block;
	  	  width: 150px;
	  	  font-size: inherit;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 150px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  padding: 0 12px;
	  	  color: inherit;
	  	  font-size: 14px;
	  	  border-color: #ddd;
	  	  border-radius: 0px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  background: none;
	  	  width: auto;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 350px;
	  	  height: 39px;
	  	}
	.add-update-preview .el-input-number /deep/ .el-input__inner {
		text-align: left;
	  	  padding: 0 12px;
	  	  color: inherit;
	  	  font-size: 14px;
	  	  border-color: #ddd;
	  	  border-radius: 0px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  background: none;
	  	  width: auto;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 350px;
	  	  height: 39px;
	  	}
	.add-update-preview .el-input-number /deep/ .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__increase {
		display: none;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border-radius: 0px;
	  	  padding: 0 10px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: none;
	  	  width: auto;
	  	  font-size: 14px;
	  	  border-color: #ddd;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  height: 39px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border-radius: 0px;
	  	  padding: 0 10px 0 30px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: none;
	  	  width: auto;
	  	  font-size: 14px;
	  	  border-color: #ddd;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  height: 39px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  	  cursor: pointer;
	  	  color: #bbb;
	  	  object-fit: cover;
	  	  font-size: 24px;
	  	  border-color: #ddd;
	  	  line-height: 60px;
	  	  border-radius: 0px;
	  	  background: none;
	  	  width: 140px;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  text-align: center;
	  	  height: 60px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  cursor: pointer;
	  	  color: #bbb;
	  	  object-fit: cover;
	  	  font-size: 24px;
	  	  border-color: #ddd;
	  	  line-height: 60px;
	  	  border-radius: 0px;
	  	  background: none;
	  	  width: 140px;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  text-align: center;
	  	  height: 60px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  cursor: pointer;
	  	  color: #bbb;
	  	  object-fit: cover;
	  	  font-size: 24px;
	  	  border-color: #ddd;
	  	  line-height: 60px;
	  	  border-radius: 0px;
	  	  background: none;
	  	  width: 140px;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  text-align: center;
	  	  height: 60px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  padding: 12px;
	  	  color: inherit;
	  	  font-size: 14px;
	  	  border-color: #ddd;
	  	  border-radius: 0px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  background: none;
	  	  width: auto;
	  	  border-width: 1px;
	  	  border-style: solid;
	  	  min-width: 50%;
	  	  height: auto;
	  	}
	
	.add-update-preview .btn .btn1 {
				border: 0px solid #a768f3;
				cursor: pointer;
				padding: 0 20px;
				margin: 0px 4px;
				color: #fff;
				display: inline-block;
				font-size: 14px;
				line-height: 24px;
				border-radius: 0px;
				outline: none;
				background: rgba(28,132,198,.6);
				width: auto;
				height: 30px;
			}
	
	.add-update-preview .btn .btn1:hover {
				transform: translate3d(0px, 0px, 0px);
				background: rgba(28,132,198,1);
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn2 {
				border: 0px solid rgba(126, 96, 16, .2);
				cursor: pointer;
				border-radius: 0px;
				padding: 0 20px;
				margin: 0px 4px;
				outline: none;
				color: #fff;
				background: rgba(28,132,198,.8);
				width: auto;
				font-size: 14px;
				line-height: 24px;
				height: 30px;
			}
	
	.add-update-preview .btn .btn2:hover {
				transform: translate3d(0px, 0px, 0px);
				background: rgba(28,132,198,1);
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn3 {
				border: 0px solid #0260ad;
				cursor: pointer;
				border-radius: 0px;
				padding: 0 20px;
				margin: 0px 4px;
				outline: none;
				color: #fff;
				background: #1c84c6;
				width: auto;
				font-size: 14px;
				line-height: 24px;
				height: 30px;
			}
	
	.add-update-preview .btn .btn3:hover {
				transform: translate3d(0px, 0px, 0px);
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn4 {
				border: 0px solid rgba(126, 96, 16, .2);
				cursor: pointer;
				border-radius: 0px;
				padding: 0 20px;
				margin: 0px 4px;
				outline: none;
				color: #fff;
				background: rgba(28,132,198,.8);
				width: auto;
				font-size: 14px;
				line-height: 24px;
				height: 30px;
			}
	
	.add-update-preview .btn .btn4:hover {
				transform: translate3d(0px, 0px, 0px);
				background: rgba(28,132,198,1);
				opacity: 1;
			}
	
	.add-update-preview .btn .btn5 {
				border: 0px solid #6c757d;
				cursor: pointer;
				border-radius: 0px;
				padding: 0 20px;
				margin: 4px;
				outline: none;
				color: #fff;
				background: rgba(28,132,198,.6);
				width: auto;
				font-size: 14px;
				line-height: 24px;
				height: 30px;
			}
	
	.add-update-preview .btn .btn5:hover {
				transform: translate3d(0px, 0px, 0px);
				background: rgba(28,132,198,1);
				opacity: 1;
			}
</style>
