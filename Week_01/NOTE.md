学习笔记
<br/>
1.数组，链表，跳表 基本特性
~~~~
数组：数组增加删除元素，需要移动平均一半的元素，所以对于数组来说
      增删慢，但是数组可以随意访问任意元素，查询速度很慢

链表：链表的本质是每个元素靠指针指向其相邻元素，随机访问需要遍历整个链表。
     访问和搜索的时间复杂度为O(n)。
     插入删除元素只需要处理相邻元素的指针指向关系，所以插入和删除的时间复杂度为O(1)。


跳表：跳表可以解决链表查询速度慢的问题，跳表的本质是在链表的基础上进行升维，加入多级索引，
     每级索引不再是跳向相邻元素，而是跳跃 2^k 个元素。
     故其访问和搜索的时间复杂度为O(logn)，插入和删除元素的时间复杂度也是O(logn)。

~~~~
2.栈和队列
  ~~~~
栈:先进后出
    
队列:先进先出
  ~~~~    