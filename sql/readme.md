-sqlserver  mysql 关系型数据库
- mongodb  NOSQL  存储
- blog
    - 用户表
        登录  鉴权 + role  分配
        id(自增 int11)   username(varchar 255)   password(varchar 不能存明文，  hash 加盐)
        索引？ primary  KEY (`id`)  查询更快


1. 密码不能存明文，  java/node mvc 用户表单传过来的password 123456
   md5 单向加密方式 先加密在存到数据库。
      数据库被攻击，  解密的化，
      md5(123456) == password
2. CREATE TABLE `user` (
     field int(11) AUTO_INCREMENT NOT NULL,   
           varchar(255)
           longtext
    PRIMAR KEY (`id`),  主键
    UNIQUE KEY  `name`  (`name`)  除了主索引， 其他索引 取索引名字  唯一

) ENGINE =

   web http  默认服务  80

    select * from user where id = 1;  o(1)


- create database bolg;  新建blog 项目对应的数据库
MYSQL 3306  启动的数据服务
java/node/go  http服务  sql 请求

- 文章列表？  select 索引？ index 查询更快 查询利用上索引
  primary key  (`id`)

    文章表  主表
    用户表  附属于

    文章的列表(包含用户信息)

- select post.id,      post.title,      post.content,     user.id as userId,     user.name as userName,                                       from post LEFT JOIN user ON  user.id = post.userId;
    联合查询的一种   JOIN
    LEFT JOIN  左边的是主表
    ON  条件 user.id= post.id


`id`  int(11) NOT NULL AUTO_INCREMENT,
`title` varchar(255) NOT NULL,  标题用 varchar
`content` longtext,             内容用 longtext
`userId` int(11) DEFAULT NULL,
PRIMARY KEY (`id`),
KEY `userId` (`userId`),
CONSTRAINT  post_ibfk_1  FOREIGN KEY (`userId`)  外键关联user表的id字段
REFERENCES `user` (`id`)    REFERENCES 这个外键跟哪个表建立关联
ENGINE = InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;


CREATE TABLE `comment`(
    `id` int(11) NOT NULL AUTO_INCREMENT,
     `content` longtext,
     `userId` int(11) NOT NULL,
     `postId` int(11) NOT NULL,
     PRIMARY KEY(`id`),
     KEY `postId` (`postId`),
     KEY `userId` (`userId`),
     CONSTRAINT `comment_ibfk_1` FOREIGN KEY
     (`postId`) REFERENCES `post` (`id`),
     CONSTRAINT `comment_ibfk_2` FOREIGN KEY
     (`userId`) REFERENCES `post` (`id`),  
)
 ENGINE = InnoDB AUTO_INCREMENt = 34 DEFAULT CHARSET=utf8mb4