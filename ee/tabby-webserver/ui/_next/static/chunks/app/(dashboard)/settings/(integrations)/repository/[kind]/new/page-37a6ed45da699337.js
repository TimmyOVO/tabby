(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3021],{4190:function(e,t,r){Promise.resolve().then(r.bind(r,90513))},90513:function(e,t,r){"use strict";r.r(t),r.d(t,{NewProvider:function(){return f}});var o=r(36164),i=r(3546),n=r(11978),u=r(43240),s=r(18500),a=r(11634),l=r(52671),d=r(88746);let p=(0,u.BX)("\n  mutation CreateGithubRepositoryProvider(\n    $input: CreateRepositoryProviderInput!\n  ) {\n    createGithubRepositoryProvider(input: $input)\n  }\n"),v=(0,u.BX)("\n  mutation CreateGithubSelfHostedRepositoryProvider(\n    $input: CreateSelfHostedRepositoryProviderInput!\n  ) {\n    createGithubSelfHostedRepositoryProvider(input: $input)\n  }\n"),c=(0,u.BX)("\n  mutation CreateGitlabRepositoryProvider(\n    $input: CreateRepositoryProviderInput!\n  ) {\n    createGitlabRepositoryProvider(input: $input)\n  }\n"),b=(0,u.BX)("\n  mutation CreateGitlabSelfHostedRepositoryProvider(\n    $input: CreateSelfHostedRepositoryProviderInput!\n  ) {\n    createGitlabSelfHostedRepositoryProvider(input: $input)\n  }\n"),f=()=>{let e=(0,d.Y)(),t=(0,n.useRouter)(),r=(0,l.fB)(!0),{mutation:u,resolver:f}=i.useMemo(()=>{switch(e){case s.vW.Github:return{mutation:p,resolver:e=>null==e?void 0:e.createGithubRepositoryProvider};case s.vW.GithubSelfHosted:return{mutation:v,resolver:e=>null==e?void 0:e.createGithubSelfHostedRepositoryProvider};case s.vW.Gitlab:return{mutation:c,resolver:e=>null==e?void 0:e.createGitlabRepositoryProvider};case s.vW.GitlabSelfHosted:return{mutation:b,resolver:e=>null==e?void 0:e.createGitlabSelfHostedRepositoryProvider};default:return{mutation:p,resolver:e=>null==e?void 0:e.createGithubRepositoryProvider}}},[e]),P=(0,a.D)(u,{onCompleted(e){f(e)&&t.back()},form:r}),y=async e=>P({input:e});return(0,o.jsx)("div",{className:"ml-4",children:(0,o.jsx)(l.Kb,{isNew:!0,form:r,onSubmit:y})})}}},function(e){e.O(0,[872,55,3004,2178,652,2578,9421,240,3957,4553,2570,830,495,7444,1565,410,3396,2671,3375,5289,1744],function(){return e(e.s=4190)}),_N_E=e.O()}]);