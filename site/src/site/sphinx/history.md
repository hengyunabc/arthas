history
===

打印命令历史。

> 历史指令会通过一个名叫history的文件持久化，所以history指令可以查看当前arthas服务器的所有历史命令，而不仅只是当前次会话使用过的命令。

### 参数说明

| 参数名称 | 参数说明              |
| -------: | :-------------------- |
|     [c:] | 清空历史指令          |
|     [n:] | 显示最近执行的n条指令 |

### 使用参考

```
#查看最近执行的3条指令
$ history 3
  269  thread
  270  cls
  271  history 3
```

```
 #清空指令
 $ history -c
 $ history 3
  1  history 3
```

