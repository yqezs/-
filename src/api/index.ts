import request from '../utils/request'

//发送验证码
export const getCode=(data:any)=>{
    return request.post('/get/code',data)
}

//注册用户
export const userAuthentication=(data:any)=>{
    return request.post('/user/authentication',data)
}

//登录
export const login=(data:any)=>{
    return request.post('/login',data)
}

//权限管理列表
export const authAdmin=(params:any)=>{
    return request.get('/auth/admin',{params})
}

//菜单权限数据
export const userGetmenu=()=>{
    return request.get('/user/getmenu')
}

//菜单权限修改
export const userSetmenu=(data:any)=>{
    return request.post('/user/setmenu',data)
}

//菜单权限列表
export const menuList=(params:any)=>{
    return request.get('/menu/list',{params})
}

//权限下拉列表
export const menuSelectlist=()=>{
    return request.get('/menu/selectlist')
}

//用户数据修改
export const updateUser=(data:any)=>{
    return request.post('/update/user',data)
}

//用户菜单权限
export const menuPermissions=()=>{
    return request.get('/menu/permissions')
}

//陪护师头像列表
export const photoList=()=>{
    return request.get('/photo/list')
}

//陪护师创建
export const companion=(data:any)=>{
    return request.post('/companion',data)
}

//陪护列表
export const companionList=(params:any)=>{
    return request.get('/companion/list',{params})
}

//陪护师删除
export const deleteCompanion=(data:any)=>{
    return request.post('/delete/companion',data)
}


