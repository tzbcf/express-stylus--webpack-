
项目介绍
     这是一个express+stylus+(#webpack)的项目架构，目前webpack搭建实时热更新出问题！目前还没知道原因！

     如果有哪位大神看到，可以留言给我（QQ：714953218）

      需求：
            和vue脚手架差不多的功能，webpack对.js和.styl和.css等后缀名结尾的文件进行监听热更新！
      （目前使用的很low解决方案是：）
            使用stylus这个插件。实时对styl文件进行实时监听
            npm install -g stylus
            stylus -h(命令行汇总)

启动项目
    开启两个命令行
    一个Node启动：
   node strat
   一个stylus启动：
   stylus -w in.styl -o public  （-w是实时监控，in.styl是监控文件 -o是编译后放在哪个文件夹（public是放置编译后的文件夹名））
