import { useMutation } from "@tanstack/react-query"
import { loginService } from "../services/login.service"

export const useToken = ()=>{
return useMutation(['token'], ()=>loginService.getToken(),{
  onSuccess(data) {
   document.cookie = `token=${data.data.token} `
  }
})
}