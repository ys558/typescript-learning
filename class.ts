// 普通类：
class Person {
    name: string;
    constructor(n:string){
        this.name = n;
    }
    run():void {
        console.log(this.name)
    }
    getName():string{
        return this.name
    }
    setName(name:string):void{
        this.name=name;
    }
}
const p=new Person('张三')
p.run()//张三
console.log(p.getName())//张三
p.setName('李四')
console.log(p.getName())//李四

// 2. 继承： extends, super
class Person2 {
    name: string;
    constructor(name:string){
        this.name = name

    }
    run():string {
        return `父类的run方法：${this.name}在运动`
    }
}
// var p2 =new Person2('zhangsan');
// alert(p2.run())

class A extends Person2 {
    constructor(name:string) {
        // 初始化父类的构造函数：super拿了上面的name属性
        super(name)
    }
    run():string {
        return `子类的run方法：${this.name}在运动`
    }
}
var A2= new A('lisi')
// 子类有和父类一样的方法：则先执行子类的方法，如果没有，再执行父类的方法：
console.log('继承：', A2.run()) //继承： 子类的run方法：lisi在运动 

// 3. 类的修饰符：
// public 
// protected 当前类和其子类可以访问，外部无法访问
// private 只有当前类可以访问
// 不加修饰符，默认是public
class Person3 {
    public name: string;
    protected age: number;
    private hehe: string;
    constructor( name:string, age: number, hehe:string, ){
        this.name = name
        this.age = age
        this.hehe = hehe
    }
    run():string {
        return `父类的run方法：${this.hehe}, hehe是父类里的私有方法，只有父类自己能调用`
    }
}

class A3 extends Person3 {
    constructor(name:string, age: number, hehe:string, ) {
        super(name, age, hehe)
    }
    run():string {
        // 如果下面加上：${this.hehe}则会报错
        return `子类的run方法：${this.name}, ${this.age}`
    }
}
var P1 = new Person3('lisi', 33, 'hehe')
console.log(P1.run());

var B = new A3('哈哈', 2344, 'hehe')
console.log(B.run());

