class Question_c {
    constructor(question, answer1, answer2, answer3, answer4, right_answer, last) {
        this.question = question;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.last = last;
        this.right_answer = right_answer;
    }
    create_html() {
        fuck.insertAdjacentHTML("afterend", `<form id='form'><h3>${this.question}</h3><input type='radio' name=q${this.last} id='a'>${this.answer1}</input><br/><input type='radio' name=q${this.last} id='b'>${this.answer2}</input><br/><input type='radio' name=q${this.last} id='c'>${this.answer3}</input><br/><input type='radio' name=q${this.last} id='d'>${this.answer4}</input><br/><button onclick='questions[${this.last}].check_answer()' class="button1-55" role="button">שליחה</button></form>`);
        this.a = document.getElementById("a");
        this.b = document.getElementById("b");
        this.c = document.getElementById("c");
        this.d = document.getElementById("d");
        this.form = document.getElementById("form");

    }

    check_last() {
        if (this.last+1 >= questions.length) {
            go_alex2();
        } else {
            title1.remove();
            this.button.remove();
            this.right.remove();
            questions[this.last + 1].create_html();
        }
    }

    check_answer() {
        if (this.right_answer == "a") {
            if (this.a.checked) {
                this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>נכון</h2>");
                var title1 = document.getElementById("title1");
                title1.insertAdjacentHTML("afterend", `<button onclick='questions[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                title1.insertAdjacentHTML("afterend", "<p id='right'></p>");
                this.right = document.getElementById("right");
                this.button = document.getElementById("button");
                this.form.remove();
            } else {
                this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>לא נכון</h2>");
                var title1 = document.getElementById("title1");
                title1.insertAdjacentHTML("afterend", `<button onclick='questions[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                title1.insertAdjacentHTML("afterend", `<p id='right'>התשובה הנכונה ${this.answer1}</p>`);
                this.right = document.getElementById("right");
                this.button = document.getElementById("button");
                this.form.remove();
            }
        } else {
            if (this.right_answer == "b") {
                if (this.b.checked) {
                    this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>נכון</h2>");
                    var title1 = document.getElementById("title1");
                    title1.insertAdjacentHTML("afterend", `<button onclick='questions[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                    title1.insertAdjacentHTML("afterend", `<p id='right'></p>`);
                    this.right = document.getElementById("right");
                    this.button = document.getElementById("button");
                    this.form.remove();
                } else {
                    this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>לא נכון</h2>");
                    var title1 = document.getElementById("title1");
                    title1.insertAdjacentHTML("afterend", `<button onclick='questions[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                    title1.insertAdjacentHTML("afterend", `<p id='right'>התשובה הנכונה ${this.answer2}</p>`);
                    this.right = document.getElementById("right");
                    this.button = document.getElementById("button");
                    this.form.remove();
                }
            } else {
                if (this.right_answer == "c") {
                    if (this.c.checked) {
                        this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>נכון</h2>");
                        var title1 = document.getElementById("title1");
                        title1.insertAdjacentHTML("afterend", `<button onclick="questions[${this.last}].check_last()" class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                        title1.insertAdjacentHTML("afterend", `<p id='right'></p>`);
                        this.right = document.getElementById("right");
                        this.button = document.getElementById("button");
                        this.form.remove(); 
                    } else {
                        this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>לא נכון</h2>");
                        var title1 = document.getElementById("title1");
                        title1.insertAdjacentHTML("afterend", `<button onclick='questions[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                        title1.insertAdjacentHTML("afterend", `<p id='right'>התשובה הנכונה ${this.answer3}</p>`);
                        this.right = document.getElementById("right");
                        this.button = document.getElementById("button");
                        this.form.remove();
                    }
                } else {
                    if (this.d.checked) {
                        this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>נכון</h2>");
                        var title1 = document.getElementById("title1");
                        title1.insertAdjacentHTML("afterend", `<button onclick='questions[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                        title1.insertAdjacentHTML("afterend", `<p id='right'></p>`);
                        this.right = document.getElementById("right");
                        this.button = document.getElementById("button");
                        this.form.remove();
                    } else {
                        this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>לא נכון</h2>");
                        var title1 = document.getElementById("title1");
                        title1.insertAdjacentHTML("afterend", `<button onclick='questions[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                        title1.insertAdjacentHTML("afterend", `<p id='right'>התשובה הנכונה ${this.answer4}</p>`);
                        this.right = document.getElementById("right");
                        this.button = document.getElementById("button");
                        this.form.remove();
                    }
                }
            }
        }
    }
}
var questions = [ new Question_c('מהו החלקיק בעל מטען חיובי באטום', 'אלקטרון', 'נויטרון', 'פרוטון', 'גרעין', 'c', 0), new Question_c('מה נמצא בגרעין האטום', 'רק אלקטרונים', 'פרוטונים ונויטרונים', 'פרוטונים ואלקטרונים', 'רק נויטרונים', 'b', 1), new Question_c('איזה מהבאים הוא יסוד', 'מים', 'מלח', 'פחמן דו-חמצני', 'חמצן', 'd', 2)];
var fuck = document.getElementById("fuck");



class Question_p {
    constructor(question, answer1, answer2, answer3, answer4, right_answer, last) {
        this.question = question;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.last = last;
        this.right_answer = right_answer;
    }
    create_html() {
        fuck1.insertAdjacentHTML("afterend", `<form id='form'><h3>${this.question}</h3><input type='radio' name=q${this.last} id='a'>${this.answer1}</input><br/><input type='radio' name=q${this.last} id='b'>${this.answer2}</input><br/><input type='radio' name=q${this.last} id='c'>${this.answer3}</input><br/><input type='radio' name=q${this.last} id='d'>${this.answer4}</input><br/><button onclick='questions_p[${this.last}].check_answer()' class="button1-55" role="button">שליחה</button></form>`);
        this.a = document.getElementById("a");
        this.b = document.getElementById("b");
        this.c = document.getElementById("c");
        this.d = document.getElementById("d");
        this.form = document.getElementById("form");

    }

    check_last() {
        if (this.last + 1 >= questions_p.length) {
            go_alex3();
        } else {
            title1.remove();
            this.button.remove();
            this.right.remove();
            questions_p[this.last + 1].create_html();
        }
    }

    check_answer() {
        if (this.right_answer == "a") {
            if (this.a.checked) {
                this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>נכון</h2>");
                var title1 = document.getElementById("title1");
                title1.insertAdjacentHTML("afterend", `<button onclick='questions_p[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                title1.insertAdjacentHTML("afterend", "<p id='right'></p>");
                this.right = document.getElementById("right");
                this.button = document.getElementById("button");
                this.form.remove();
            } else {
                this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>לא נכון</h2>");
                var title1 = document.getElementById("title1");
                title1.insertAdjacentHTML("afterend", `<button onclick='questions_p[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                title1.insertAdjacentHTML("afterend", `<p id='right'>התשובה הנכונה ${this.answer1}</p>`);
                this.right = document.getElementById("right");
                this.button = document.getElementById("button");
                this.form.remove();
            }
        } else {
            if (this.right_answer == "b") {
                if (this.b.checked) {
                    this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>נכון</h2>");
                    var title1 = document.getElementById("title1");
                    title1.insertAdjacentHTML("afterend", `<button onclick='questions_p[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                    title1.insertAdjacentHTML("afterend", `<p id='right'></p>`);
                    this.right = document.getElementById("right");
                    this.button = document.getElementById("button");
                    this.form.remove();
                } else {
                    this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>לא נכון</h2>");
                    var title1 = document.getElementById("title1");
                    title1.insertAdjacentHTML("afterend", `<button onclick='questions_p[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                    title1.insertAdjacentHTML("afterend", `<p id='right'>התשובה הנכונה ${this.answer2}</p>`);
                    this.right = document.getElementById("right");
                    this.button = document.getElementById("button");
                    this.form.remove();
                }
            } else {
                if (this.right_answer == "c") {
                    if (this.c.checked) {
                        this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>נכון</h2>");
                        var title1 = document.getElementById("title1");
                        title1.insertAdjacentHTML("afterend", `<button onclick="questions_p[${this.last}].check_last()" class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                        title1.insertAdjacentHTML("afterend", `<p id='right'></p>`);
                        this.right = document.getElementById("right");
                        this.button = document.getElementById("button");
                        this.form.remove();
                    } else {
                        this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>לא נכון</h2>");
                        var title1 = document.getElementById("title1");
                        title1.insertAdjacentHTML("afterend", `<button onclick='questions_p[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                        title1.insertAdjacentHTML("afterend", `<p id='right'>התשובה הנכונה ${this.answer3}</p>`);
                        this.right = document.getElementById("right");
                        this.button = document.getElementById("button");
                        this.form.remove();
                    }
                } else {
                    if (this.d.checked) {
                        this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>נכון</h2>");
                        var title1 = document.getElementById("title1");
                        title1.insertAdjacentHTML("afterend", `<button onclick='questions_p[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                        title1.insertAdjacentHTML("afterend", `<p id='right'></p>`);
                        this.right = document.getElementById("right");
                        this.button = document.getElementById("button");
                        this.form.remove();
                    } else {
                        this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>לא נכון</h2>");
                        var title1 = document.getElementById("title1");
                        title1.insertAdjacentHTML("afterend", `<button onclick='questions_p[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                        title1.insertAdjacentHTML("afterend", `<p id='right'>התשובה הנכונה ${this.answer4}</p>`);
                        this.right = document.getElementById("right");
                        this.button = document.getElementById("button");
                        this.form.remove();
                    }
                }
            }
        }
    }
}
var questions_p = [new Question_p('מהם שלושת צבעי היסוד של האור', 'אדום, ירוק, כחול', 'שחור, לבן, סגול', 'אדום, כחול, צהוב', 'ירוק, כתום, כחול', 'a', 0), new Question_p('איזה צבע יתקבל כשמאירים אור אדום ואור ירוק יחד', 'כחול', 'צהוב', 'סגול', 'תכלת', 'b', 1), new Question_p('מה קורה כשמערבבים את כל צבעי האור ביחד', 'מתקבל אור שחור', 'מתקבל צבע שחור', 'מתקבל אור לבן', 'מתקבל צבע לבן', 'c', 2)];
var fuck1 = document.getElementById("fuck1");

class Question_b {
    constructor(question, answer1, answer2, answer3, answer4, right_answer, last) {
        this.question = question;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.last = last;
        this.right_answer = right_answer;
    }
    create_html() {
        fuck2.insertAdjacentHTML("afterend", `<form id='form'><h3>${this.question}</h3><input type='radio' name=q${this.last} id='a'>${this.answer1}</input><br/><input type='radio' name=q${this.last} id='b'>${this.answer2}</input><br/><input type='radio' name=q${this.last} id='c'>${this.answer3}</input><br/><input type='radio' name=q${this.last} id='d'>${this.answer4}</input><br/><button onclick='questions_b[${this.last}].check_answer()' class="button1-55" role="button">שליחה</button></form>`);
        this.a = document.getElementById("a");
        this.b = document.getElementById("b");
        this.c = document.getElementById("c");
        this.d = document.getElementById("d");
        this.form = document.getElementById("form");

    }

    check_last() {
        if (this.last + 1 >= questions_b.length) {
            go_alex4();
        } else {
            title1.remove();
            this.button.remove();
            this.right.remove();
            questions_b[this.last + 1].create_html();
        }
    }

    check_answer() {
        if (this.right_answer == "a") {
            if (this.a.checked) {
                this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>נכון</h2>");
                var title1 = document.getElementById("title1");
                title1.insertAdjacentHTML("afterend", `<button onclick='questions_b[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                title1.insertAdjacentHTML("afterend", "<p id='right'></p>");
                this.right = document.getElementById("right");
                this.button = document.getElementById("button");
                this.form.remove();
            } else {
                this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>לא נכון</h2>");
                var title1 = document.getElementById("title1");
                title1.insertAdjacentHTML("afterend", `<button onclick='questions_b[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                title1.insertAdjacentHTML("afterend", `<p id='right'>התשובה הנכונה ${this.answer1}</p>`);
                this.right = document.getElementById("right");
                this.button = document.getElementById("button");
                this.form.remove();
            }
        } else {
            if (this.right_answer == "b") {
                if (this.b.checked) {
                    this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>נכון</h2>");
                    var title1 = document.getElementById("title1");
                    title1.insertAdjacentHTML("afterend", `<button onclick='questions_b[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                    title1.insertAdjacentHTML("afterend", `<p id='right'></p>`);
                    this.right = document.getElementById("right");
                    this.button = document.getElementById("button");
                    this.form.remove();
                } else {
                    this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>לא נכון</h2>");
                    var title1 = document.getElementById("title1");
                    title1.insertAdjacentHTML("afterend", `<button onclick='questions_b[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                    title1.insertAdjacentHTML("afterend", `<p id='right'>התשובה הנכונה ${this.answer2}</p>`);
                    this.right = document.getElementById("right");
                    this.button = document.getElementById("button");
                    this.form.remove();
                }
            } else {
                if (this.right_answer == "c") {
                    if (this.c.checked) {
                        this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>נכון</h2>");
                        var title1 = document.getElementById("title1");
                        title1.insertAdjacentHTML("afterend", `<button onclick="questions_b[${this.last}].check_last()" class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                        title1.insertAdjacentHTML("afterend", `<p id='right'></p>`);
                        this.right = document.getElementById("right");
                        this.button = document.getElementById("button");
                        this.form.remove();
                    } else {
                        this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>לא נכון</h2>");
                        var title1 = document.getElementById("title1");
                        title1.insertAdjacentHTML("afterend", `<button onclick='questions_b[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                        title1.insertAdjacentHTML("afterend", `<p id='right'>התשובה הנכונה ${this.answer3}</p>`);
                        this.right = document.getElementById("right");
                        this.button = document.getElementById("button");
                        this.form.remove();
                    }
                } else {
                    if (this.d.checked) {
                        this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>נכון</h2>");
                        var title1 = document.getElementById("title1");
                        title1.insertAdjacentHTML("afterend", `<button onclick='questions_b[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                        title1.insertAdjacentHTML("afterend", `<p id='right'></p>`);
                        this.right = document.getElementById("right");
                        this.button = document.getElementById("button");
                        this.form.remove();
                    } else {
                        this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>לא נכון</h2>");
                        var title1 = document.getElementById("title1");
                        title1.insertAdjacentHTML("afterend", `<button onclick='questions_b[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                        title1.insertAdjacentHTML("afterend", `<p id='right'>התשובה הנכונה ${this.answer4}</p>`);
                        this.right = document.getElementById("right");
                        this.button = document.getElementById("button");
                        this.form.remove();
                    }
                }
            }
        }
    }
}
var questions_b = [new Question_b('איזה אברון בתא אחראי על הפקת אנרגיה', 'מיטוכונדריה', 'ריבוזום', 'גרעין', 'כלורופלסט', 'a', 0), new Question_b('באיזה מהתאים הבאים נוכל למצוא דופן תא', 'תא שריר', 'תא עור', 'תא דם אדום', 'תא צמחי', 'd', 1), new Question_b('מה תפקיד הריבוזומים בתא', 'הפקת אנרגיה', 'ייצור חלבונים', 'תנועה של התא', 'אגירת מים', 'b', 2)];
var fuck2 = document.getElementById("fuck2");

class Question_cs {
    constructor(question, answer1, answer2, answer3, answer4, right_answer, last) {
        this.question = question;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.last = last;
        this.right_answer = right_answer;
    }
    create_html() {
        fuck3.insertAdjacentHTML("afterend", `<form id='form'><h3>${this.question}</h3><input type='radio' name=q${this.last} id='a'>${this.answer1}</input><br/><input type='radio' name=q${this.last} id='b'>${this.answer2}</input><br/><input type='radio' name=q${this.last} id='c'>${this.answer3}</input><br/><input type='radio' name=q${this.last} id='d'>${this.answer4}</input><br/><button onclick='questions_cs[${this.last}].check_answer()' class="button1-55" role="button">שליחה</button></form>`);
        this.a = document.getElementById("a");
        this.b = document.getElementById("b");
        this.c = document.getElementById("c");
        this.d = document.getElementById("d");
        this.form = document.getElementById("form");

    }

    check_last() {
        if (this.last + 1 >= questions_cs.length) {
            go_alex5();
        } else {
            title1.remove();
            this.button.remove();
            this.right.remove();
            questions_cs[this.last + 1].create_html();
        }
    }

    check_answer() {
        if (this.right_answer == "a") {
            if (this.a.checked) {
                this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>נכון</h2>");
                var title1 = document.getElementById("title1");
                title1.insertAdjacentHTML("afterend", `<button onclick='questions_cs[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                title1.insertAdjacentHTML("afterend", "<p id='right'></p>");
                this.right = document.getElementById("right");
                this.button = document.getElementById("button");
                this.form.remove();
            } else {
                this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>לא נכון</h2>");
                var title1 = document.getElementById("title1");
                title1.insertAdjacentHTML("afterend", `<button onclick='questions_cs[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                title1.insertAdjacentHTML("afterend", `<p id='right'>התשובה הנכונה ${this.answer1}</p>`);
                this.right = document.getElementById("right");
                this.button = document.getElementById("button");
                this.form.remove();
            }
        } else {
            if (this.right_answer == "b") {
                if (this.b.checked) {
                    this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>נכון</h2>");
                    var title1 = document.getElementById("title1");
                    title1.insertAdjacentHTML("afterend", `<button onclick='questions_cs[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                    title1.insertAdjacentHTML("afterend", `<p id='right'></p>`);
                    this.right = document.getElementById("right");
                    this.button = document.getElementById("button");
                    this.form.remove();
                } else {
                    this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>לא נכון</h2>");
                    var title1 = document.getElementById("title1");
                    title1.insertAdjacentHTML("afterend", `<button onclick='questions_cs[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                    title1.insertAdjacentHTML("afterend", `<p id='right'>התשובה הנכונה ${this.answer2}</p>`);
                    this.right = document.getElementById("right");
                    this.button = document.getElementById("button");
                    this.form.remove();
                }
            } else {
                if (this.right_answer == "c") {
                    if (this.c.checked) {
                        this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>נכון</h2>");
                        var title1 = document.getElementById("title1");
                        title1.insertAdjacentHTML("afterend", `<button onclick="questions_cs[${this.last}].check_last()" class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                        title1.insertAdjacentHTML("afterend", `<p id='right'></p>`);
                        this.right = document.getElementById("right");
                        this.button = document.getElementById("button");
                        this.form.remove();
                    } else {
                        this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>לא נכון</h2>");
                        var title1 = document.getElementById("title1");
                        title1.insertAdjacentHTML("afterend", `<button onclick='questions_cs[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                        title1.insertAdjacentHTML("afterend", `<p id='right'>התשובה הנכונה ${this.answer3}</p>`);
                        this.right = document.getElementById("right");
                        this.button = document.getElementById("button");
                        this.form.remove();
                    }
                } else {
                    if (this.d.checked) {
                        this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>נכון</h2>");
                        var title1 = document.getElementById("title1");
                        title1.insertAdjacentHTML("afterend", `<button onclick='questions_cs[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                        title1.insertAdjacentHTML("afterend", `<p id='right'></p>`);
                        this.right = document.getElementById("right");
                        this.button = document.getElementById("button");
                        this.form.remove();
                    } else {
                        this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>לא נכון</h2>");
                        var title1 = document.getElementById("title1");
                        title1.insertAdjacentHTML("afterend", `<button onclick='questions_cs[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                        title1.insertAdjacentHTML("afterend", `<p id='right'>התשובה הנכונה ${this.answer4}</p>`);
                        this.right = document.getElementById("right");
                        this.button = document.getElementById("button");
                        this.form.remove();
                    }
                }
            }
        }
    }
}
var questions_cs = [new Question_cs('מהו משתנה', 'פקודת קלט', 'מין קופסא שמכילה ערך', 'טקסט שאנחנו רוצים לשמור', 'שמו של המחשב שמריץ את התוכנית', 'b', 0), new Question_cs('איזה מהבאים הוא דוגמא לאלגוריתם', 'רשימת קניות בסופר ', 'סיסמה למחשב', 'מפת דרכים בין ערים', 'שלבים לנעילת נעליים', 'd', 1), new Question_cs('מה מראה הקוד הבא על המסך<br/>Name=input("enter a name")<br/>print(Name)', 'את השאלה והתשובה שהמשתמש/ת יכניסו לו', 'Name', 'רק את השאלה', 'את התשובה של המשתמש/ת', 'a', 2)];
var fuck3 = document.getElementById("fuck3");

class Question_d {
    constructor(question, answer1, answer2, answer3, answer4, right_answer, last) {
        this.question = question;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.last = last;
        this.right_answer = right_answer;
    }
    create_html() {
        fuck4.insertAdjacentHTML("afterend", `<form id='form'><h3>${this.question}</h3><input type='radio' name=q${this.last} id='a'>${this.answer1}</input><br/><input type='radio' name=q${this.last} id='b'>${this.answer2}</input><br/><input type='radio' name=q${this.last} id='c'>${this.answer3}</input><br/><input type='radio' name=q${this.last} id='d'>${this.answer4}</input><br/><button onclick='questions_d[${this.last}].check_answer()' class="button1-55" role="button">שליחה</button></form>`);
        this.a = document.getElementById("a");
        this.b = document.getElementById("b");
        this.c = document.getElementById("c");
        this.d = document.getElementById("d");
        this.form = document.getElementById("form");

    }

    check_last() {
        if (this.last + 1 >= questions_d.length) {
            go_doc_end();
        } else {
            title1.remove();
            this.button.remove();
            this.right.remove();
            questions_d[this.last + 1].create_html();
        }
    }

    check_answer() {
        if (this.right_answer == "a") {
            if (this.a.checked) {
                this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>נכון</h2>");
                var title1 = document.getElementById("title1");
                title1.insertAdjacentHTML("afterend", `<button onclick='questions_d[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                title1.insertAdjacentHTML("afterend", "<p id='right'></p>");
                this.right = document.getElementById("right");
                this.button = document.getElementById("button");
                this.form.remove();
            } else {
                this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>לא נכון</h2>");
                var title1 = document.getElementById("title1");
                title1.insertAdjacentHTML("afterend", `<button onclick='questions_d[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                title1.insertAdjacentHTML("afterend", `<p id='right'>התשובה הנכונה ${this.answer1}</p>`);
                this.right = document.getElementById("right");
                this.button = document.getElementById("button");
                this.form.remove();
            }
        } else {
            if (this.right_answer == "b") {
                if (this.b.checked) {
                    this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>נכון</h2>");
                    var title1 = document.getElementById("title1");
                    title1.insertAdjacentHTML("afterend", `<button onclick='questions_d[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                    title1.insertAdjacentHTML("afterend", `<p id='right'></p>`);
                    this.right = document.getElementById("right");
                    this.button = document.getElementById("button");
                    this.form.remove();
                } else {
                    this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>לא נכון</h2>");
                    var title1 = document.getElementById("title1");
                    title1.insertAdjacentHTML("afterend", `<button onclick='questions_d[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                    title1.insertAdjacentHTML("afterend", `<p id='right'>התשובה הנכונה ${this.answer2}</p>`);
                    this.right = document.getElementById("right");
                    this.button = document.getElementById("button");
                    this.form.remove();
                }
            } else {
                if (this.right_answer == "c") {
                    if (this.c.checked) {
                        this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>נכון</h2>");
                        var title1 = document.getElementById("title1");
                        title1.insertAdjacentHTML("afterend", `<button onclick="questions_d[${this.last}].check_last()" class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                        title1.insertAdjacentHTML("afterend", `<p id='right'></p>`);
                        this.right = document.getElementById("right");
                        this.button = document.getElementById("button");
                        this.form.remove();
                    } else {
                        this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>לא נכון</h2>");
                        var title1 = document.getElementById("title1");
                        title1.insertAdjacentHTML("afterend", `<button onclick='questions_d[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                        title1.insertAdjacentHTML("afterend", `<p id='right'>התשובה הנכונה ${this.answer3}</p>`);
                        this.right = document.getElementById("right");
                        this.button = document.getElementById("button");
                        this.form.remove();
                    }
                } else {
                    if (this.d.checked) {
                        this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>נכון</h2>");
                        var title1 = document.getElementById("title1");
                        title1.insertAdjacentHTML("afterend", `<button onclick='questions_d[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                        title1.insertAdjacentHTML("afterend", `<p id='right'></p>`);
                        this.right = document.getElementById("right");
                        this.button = document.getElementById("button");
                        this.form.remove();
                    } else {
                        this.form.insertAdjacentHTML("beforebegin", "<h2 id='title1'>לא נכון</h2>");
                        var title1 = document.getElementById("title1");
                        title1.insertAdjacentHTML("afterend", `<button onclick='questions_d[${this.last}].check_last()' class="button1-55" role="button" id='button'>שאלה הבאה</button>`);
                        title1.insertAdjacentHTML("afterend", `<p id='right'>התשובה הנכונה ${this.answer4}</p>`);
                        this.right = document.getElementById("right");
                        this.button = document.getElementById("button");
                        this.form.remove();
                    }
                }
            }
        }
    }
}
var questions_d = [new Question_d('מהי היחידה הקטנה ביותר של חומר', 'מולקולה', 'אטום', 'אלקטרון', 'תא', 'b', 0), new Question_d('מהו צבע הצל כאשר אין כלל אור', 'לבן', 'אפור', 'כחול כהה', 'שחור', 'd', 1), new Question_d('מה תהיה התוצאה של הפקודה הבאה אם המשתמש הקליד "Tom"<br/>name=input("Enter your name: ")<br/>print("Hello " + name)', 'Hello Tom', 'Hello+name', 'Tom+Hello', 'שגיאה', 'a', 2), new Question_d('מהי יחידת החיים הבסיסית ביותר בכל היצורים החיים', 'רקמה', 'אברון', 'תא', 'אטום', 'c', 3), new Question_d('אם מקרינים אור כחול על חולצה אדומה, מה יקרה', 'החולצה תיראה אדומה', 'החולצה תיראה ירוקה', 'החולצה תיראה כחולה', 'החולצה תיראה שחורה', 'd', 4), new Question_d('איזה מספר מייצג את מספר הפרוטונים באטום', 'המספר האטומי', 'המסה האטומית', 'מספר הנויטרונים', 'מספר האלקטרונים בלבד', 'a', 5), new Question_d('איזו מהבאות היא תכונה משותפת לכל התאים', 'נוכחות של דופן תא', 'נוכחות של קרום תא', 'נוכחות של כלורופלסטים', 'נוכחות של גרעין', 'b', 6), new Question_d('מה תהיה התוצאה של הקוד הבא<br/>x = "4"<br/>y = "3"<br/>print(x + y)', '7', 'שגיאה', 'x + y', '43', 'd', 7), new Question_d('איזה צבע נחשב לצבע יסוד של אור', 'צהוב', 'כתום', 'ירוק', 'סגול', 'c', 8), new Question_d('מהו החלק בתא שאחראי על שליטה בתהליכים בתא', 'מיטוכונדריה', 'ריבוזום', 'קרום התא', 'גרעין התא', 'd', 9), new Question_d('איזה מהשמות הבאים למשתנים אינו חוקי בפייתון', '2name', 'name', 'my_name', 'str1', 'a', 10), new Question_d('מה נמצא במעטפת של האטום', 'פרוטונים', 'נויטרונים', 'אלקטרונים', 'גרעין', 'c', 11)];
var fuck4 = document.getElementById("fuck4");

function go_instructions() {
    location.replace("instructions.html");
}
function go_home1() {
    location.replace("home1.html");
}
function go_home2() {
    location.replace("home2.html");
}
function go_alex1() {
    location.replace("alex1.html");
}
function go_roby1() {
    location.replace("roby1.html");
}
function go_chemistry1() {
    location.replace("chemistry1.html");
}
function go_chemistry2() {
    location.replace("chemistry2.html");
}
function go_chemistry3() {
    location.replace("chemistry3.html");
}
function go_chemistry4() {
    location.replace("chemistry4.html");
}
function go_roby2() {
    location.replace("roby2.html");
}
function go_chemistry_q() {
    location.replace("chemistry_q.html");
}
function go_alex2() {
    location.replace("alex2.html");
}
function go_roby3() {
    location.replace("roby3.html");
}
function go_physics1() {
    location.replace("physics1.html");
}
function go_physics2() {
    location.replace("physics2.html");
}
function go_physics3() {
    location.replace("physics3.html");
}
function go_physics4() {
    location.replace("physics4.html");
}
function go_roby4() {
    location.replace("roby4.html");
}
function go_roby5() {
    location.replace("roby5.html");
}
function go_physics_q() {
    location.replace("physics_q.html");
}
function go_alex3() {
    location.replace("alex3.html");
}
function go_roby6() {
    location.replace("roby6.html");
}
function go_biology1() {
    location.replace("biology1.html");
}
function go_biology2() {
    location.replace("biology2.html");
}
function go_biology3() {
    location.replace("biology3.html");
}
function go_biology4() {
    location.replace("biology4.html");
}
function go_roby7() {
    location.replace("roby7.html");
}
function go_roby8() {
    location.replace("roby8.html");
}
function go_biology_q() {
    location.replace("biology_q.html");
}
function go_alex4() {
    location.replace("alex4.html");
}
function go_roby9() {
    location.replace("roby9.html");
}
function go_cs1() {
    location.replace("cs1.html");
}
function go_cs2() {
    location.replace("cs2.html");
}
function go_cs3() {
    location.replace("cs3.html");
}
function go_cs4() {
    location.replace("cs4.html");
}
function go_cs5() {
    location.replace("cs5.html");
}
function go_cs6() {
    location.replace("cs6.html");
}
function go_cs7() {
    location.replace("cs7.html");
}
function go_cs8() {
    location.replace("cs8.html");
}
function go_roby10() {
    location.replace("roby10.html");
}
function go_cs_q() {
    location.replace("cs_q.html");
}
function go_alex5() {
    location.replace("alex5.html");
}
function go_doc_q() {
    location.replace("doc_q.html");
}
function go_doc_end() {
    location.replace("doc_end.html");
}
function go_roby12() {
    location.replace("roby12.html");
}
function start_q_c() {
    questions[0].create_html();
    var try1 =document.getElementById("try1");
    try1.remove();
}
function start_q_b() {
    questions_b[0].create_html();
    var try2 = document.getElementById("try2");
    try2.remove();
}
function start_q_cs() {
    questions_cs[0].create_html();
    var try3 = document.getElementById("try3");
    try3.remove();
}
function start_q_p() {
    questions_p[0].create_html();
    var try4 = document.getElementById("try4");
    try4.remove();
}
function start_q_d() {
    questions_d[0].create_html();
    var try5 = document.getElementById("try5");
    try5.remove();
}