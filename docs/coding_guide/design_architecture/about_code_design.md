### 为什么学习代码设计？

​	1，就是为了编写可维护，可读，可扩展的代码。

​	2，应对复杂的代码开发。

​	3，降低bug，减少麻烦。

### 如何评价代码质量？

1，可维护性（maintainability）

​		重点：1，不引入新的bug。2，快速修改或者添加代码。

2，可读性（readability）

​		维护代码首先要读懂。

​		如何评价可读性：1，是否符合代码规范，2，命名是否达意，3，注释是否清楚，4，函数是否合适，5，模块是否清晰，6，代码是否高内聚，低耦合。

3，可扩展型（extensibity)

​		含义：在不修改或者少修改的基础上添加新功能。

### 如何写出高质量的代码？

​		1，面向对象。（编程范式主要有三种面向过程，面向对象，函数式编程）

​			1，面向对象的四大特性，封装，抽象，继承和多态。

​			2，面对对象和面向过程的区别和联系。

​			3，如何面向对象分析，设计，编程。

​			4，接口和抽象的区别，以及应用场景。

​			5，基于接口而非实现编程的设计思想。

​			6，多用组合，少用继承。

​			7，贫血和充血模型。

​		2，设计原则。

​			1，单一职责原则。

​			2，开笔原则。

​			3，里氏替换。

​			4，接口隔离原则。

​			5，依赖反转原则。

​			6，kiss，yagni，dry，lod原则。

​	3，设计模式。主要针对常用场景，总结出来最佳做法。目的：隔离。

​		1，创建类模式，把创建和使用隔离。举例：单例，工厂，建造者，原型。

​		2，结构类，把不同功能隔离。代理，装饰器，适配器，桥接，门面，组合，享元。

​		3，行为类，把不同行为隔离。观察者，模版方法，策略，职责链，状态，迭代器，访问者，备忘录，命令，解释器，中介。

​	4，代码规范。具体

​	5，重构。

### 如何避免过度设计。

​	1，看需求。

​	2，重构。