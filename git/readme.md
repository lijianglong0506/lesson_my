版本迭代 新的版本  版本管理器
主流的版本控制器
Git 当下最流行的
svn
cvs
vss
tfs
Git 是目前世界上最先进的分布式版本控制系统
Git Bash: Unix与Linux风格的命令行，使用最多，推荐最多
Git CMD:  Windows风格的命令行
Git GUI: 图形界面的Git，不建议初学者使用，尽量先熟悉常用命令

- 基本的Linux命令学习
  平时一定要多使用这些基础命令
1. cd: 改变目录
2. cd..: 回退到上一个目录，直接cd进入默认目录
3. pwd: 显示当前所在的目录路径

4. ls(||): 都是列出当前目录中的所有文件，只不过||列出的内容更为详细
5. touch: 新建一个文件 如 touch index.js 就会在当前目录下新建一个index.js文件
6. rm: 删除一个文件，rm index.js 就会把 index.js文件删除

7. mkdir: 新建一个目录，就是新建一个文件夹
8. rm-r: 删除一个文件夹，rm-r src 删除src目录
      rm-rf 切勿在Linus中尝试！删除电脑中所有文件

9. mv: 移动文件，mv index.html src      index.html 是我们要移动的文件，src是目标文件夹，当然，这样写，必须保证文件和目标文件夹在同一目录下

10. reset: 重新初始化终端/清屏
11. clear: 清屏
12. history: 查看命令历史
13. help: 帮助
14. exit: 退出
15. #: 表示注释

查看配置 git config -l
查看系统的配置: git config --system --list
查看本地的配置；git config --global --list
所有的配置文件，其实都保存在本地

必须要配置:用户标识
Git config --global user.name ""   配置用户名
Git config --global user.email ""  配置邮箱
环境变量只是为了全局使用而已！配不配都无所谓

分为四个部分:
Working Directory  工作目录

命令操作下面两个
Stage/index  暂存区  暂存区只是一个文件
Repository 或 Git  Directory  资源库

Remote Directory 远程的Git仓库


- .git是个隐藏文件要显示后才能看

git的工作流程：
1. 在工作目录中添加，修改文件
2. 将需要进行版本管理的文件放入暂存区域   git add .
3. 将暂存区域的文件提交到git仓库  git commit
4. 提交到远程仓库  git push

创建仓库的两种方法:
- git init  在当前目录新建一个Git代码库
- git clone [url]  克隆一个项目和他的整个代码历史(版本信息)

- modified 文件已经修改
   
   git status 查看所有文件状态  untracked 没有被跟踪
   git status [filename] 查看指定文件状态
   git add .     添加所有文件到暂存区
   git commit -m"消息内容" 提交暂存区中的内容到本地仓库 -m 提交信息

   *.txt  忽略所有.txt结尾的文件，这样的话上传就不会选中
   ！lib.txt  但lib.txt除外
   /temp  仅忽略项目根目录下的TODO文件，不包括其他目录temp
   build/ 忽略build/目录下的所有文件
   doc/*.txt  会忽略 doc/notes.txt  但不包括 doc/server/arch.txt