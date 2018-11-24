<?php

namespace App\Http\Controllers;

use App\User;

use Illuminate\Http\Request;

class UserController extends Controller
{
    //用户注册
    public function UserRegister(Request $req)
    {
        $this->validate($req, [
            'username' => 'required|min:6|max:17',
            'password' => 'required:min:6:max17'
        ]);
        if (\Auth::once(['username' => $req->username])) {
            return response('账号已存在');
        } else {
            $api_token = str_random(60);
            $user = new User;
            $user->username =  $req->username;
            $user->password = $req->password;
            $user->api_token = $api_token;
            $user->save();
            return response('注册成功');
        }
    }

    //用户登录
    public function UserLogin(Request $req)
    {
        $this->validate($req, [
            'username' => 'required',
            'password' => 'required'
        ]);
        if (\Auth::once(['username' => $req->username, 'password' => $req->password])) {
            return \Auth::user()->api_token;
        } else {
            return response('账号或密码错误');
        }
        return response('连接成功');
    }
}
