__NUXT_JSONP__("/installation/postinstall", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H){return {data:[{document:{slug:"postinstall",description:"Things to do after installing Ultramarine Linux.",title:"Post-installation",position:7,category:q,toc:[{id:r,depth:n,text:s},{id:t,depth:3,text:u},{id:v,depth:n,text:w},{id:x,depth:n,text:y}],body:{type:"root",children:[{type:b,tag:f,props:{},children:[{type:a,value:"After installing Ultramarine Linux, There are a few things you should do to make the most out of your new system."}]},{type:a,value:c},{type:b,tag:z,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"These tweaks should be made available later on the Ultramarine Welcome or Settings app. (TODO)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:r},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#install-nvidia-drivers",tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"If you have an NVIDIA GPU, you can install the latest drivers for it by running the following commands:"}]},{type:a,value:c},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:F,props:{},children:[{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:m}]},{type:a,value:" dnf update "},{type:b,tag:d,props:{className:[e,p]},children:[{type:a,value:"# Update the system first, because NVIDIA drivers will build using the latest kernel."}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:m}]},{type:a,value:" dnf "},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:"install"}]},{type:a,value:" akmod-nvidia "},{type:b,tag:d,props:{className:[e,p]},children:[{type:a,value:"# Install the NVIDIA kernel module."}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Then, reboot your system."}]},{type:a,value:c},{type:b,tag:"h3",props:{id:t},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#optimus-laptops-use-the-nvidia-gpu-as-the-primary-gpu",tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Execute the following scripts to make your NVIDIA GPU the primary GPU:"}]},{type:a,value:c},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:F,props:{},children:[{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:m}]},{type:a,value:G},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:"cp"}]},{type:a,value:" -p \u002Fusr\u002Fshare\u002FX11\u002Fxorg.conf.d\u002Fnvidia.conf \u002Fetc\u002FX11\u002Fxorg.conf.d\u002Fnvidia.conf\n"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:m}]},{type:a,value:G},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:"sed"}]},{type:a,value:" -i "},{type:b,tag:d,props:{className:[e,"string"]},children:[{type:a,value:"'10i\\        Option \"PrimaryGPU\" \"yes\"'"}]},{type:a,value:" \u002Fetc\u002FX11\u002Fxorg.conf.d\u002Fnvidia.conf "},{type:b,tag:d,props:{className:[e,p]},children:[{type:a,value:"# Add PrimaryGPU = yes to the 10th line of the file."}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Then reboot your system."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Make sure you're using the Xorg version of your desktop environment."}]},{type:a,value:c},{type:b,tag:o,props:{id:v},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#install-codecs",tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Ultramarine Linux already includes the necessary codecs for the majority of the popular multimedia formats. You do not need to install any additional codecs."}]},{type:a,value:c},{type:b,tag:o,props:{id:x},children:[{type:b,tag:h,props:{ariaHidden:i,href:"#set-up-snapper-btrfs-snapshots",tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"TO BE DONE"}]},{type:a,value:c},{type:b,tag:z,props:{type:"warning"},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Currently, RPM's architecture does not handle snapper properly. You might experience broken RPM transactions when doing rollbacks. This is a known issue and must be addressed upstream."}]},{type:a,value:c}]}]},dir:"\u002Fen\u002Finstallation",path:"\u002Fen\u002Finstallation\u002Fpostinstall",extension:".md",createdAt:H,updatedAt:H,to:"\u002Finstallation\u002Fpostinstall"},prev:{title:q,path:"\u002Fen\u002Finstallation\u002Finstallation",to:"\u002Finstallation\u002Finstallation"},next:{title:"Concepts Overview",path:"\u002Fen\u002Flinux\u002Foverview",to:"\u002Flinux\u002Foverview"}}],fetch:{},mutations:[]}}("text","element","\n","span","token","p","function","a","true",-1,"icon","icon-link","sudo",2,"h2","comment","Installation","install-nvidia-drivers","Install NVIDIA Drivers","optimus-laptops-use-the-nvidia-gpu-as-the-primary-gpu","(Optimus Laptops) use the NVIDIA GPU as the primary GPU","install-codecs","Install Codecs","set-up-snapper-btrfs-snapshots","Set up Snapper (Btrfs Snapshots)","alert","div","nuxt-content-highlight","pre","language-bash","line-numbers","code"," ","2022-05-26T12:34:06.908Z")));