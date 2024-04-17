const mongoose = require("mongoose");

let highestTime = 0;

const questionSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  question: String,
  options: [String],
  correctAnswer: String,
  marks: { type: Number, default: 1 }, 
  type: { type: String, enum: ["options", "input"], default: "options" }, 
});

const QuestionModel = mongoose.model("QuestionModel", questionSchema);

module.exports = QuestionModel;

const data = [
  {
    "question":
      "The _________ is too high for it to be considered _________.",
    options: [
      "fair / fare",
      "faer / fair",
      "fare / fare ",
      "fare / fair",
    ],
    correctAnswer: "D",
    marks: 1,
    type: "options",
  },
  {
    question:
      `A function y(x) is defined in the interval [0, 1] on the 𝑥-axis as <br> 
      \\[
        y(x) = \\begin{cases}
        2 & \\text{if } 0 \\leq x < \\frac{1}{3} \\\\
        3 & \\text{if } \\frac{1}{3} \\leq x < \\frac{3}{4} \\\\
        1 & \\text{if } \\frac{3}{4} \\leq x \\leq 1
        \\end{cases}
        \\]  <br>  Which one of the following is the area under the curve for the interval [0, 1] on
        the 𝑥-axis? 
        `,
    options: [
      `\\(\\frac{5}{6}\\)`,
      `\\(\\frac{6}{5}\\)`,
      `\\(\\frac{13}{6}\\)`,
      `\\(\\frac{6}{13}\\)`
    ],
    correctAnswer: "C",
    marks: 1,
    type: "options",
  },
  {
    question:
      `Let r be a root of the equation \\(x^4 + 2x + 6 = 0\\).<br>
      Then the value of the expression \\((r + 2)(r + 3)(r + 4)(r + 5)\\) is`,
    options: [
      `51`,
      `-51`,
      `126`,
      `-126`
    ],
    correctAnswer: "D",
    marks: 1,
    type: "options",
  },
  {
    question:
      `Given below are four statements.<br><br>
      Statement 1: All students are inquisitive.<br>
      Statement 2: Some students are inquisitive.<br>
      Statement 3: No student is inquisitive.<br>
      Statement 4: Some students are not inquisitive.<br><br>
      From the given four statements, find the two statements that CANNOT BE
      TRUE simultaneously, assuming that there is at least one student in the class.`,
    
    options: [
      `Statement 1 and Statement 3`,
      `Statement 1 and Statement 2`,
      `Statement 2 and Statement 4`,
      `Statement 3 and Statement 4`
    ],
    correctAnswer: "A",
    marks: 1,
    type: "options",
  },
  {
    question:
      `The unruly crowd demanded that the accused be _____________ without trial.`,
    
    options: [
      `hanged`,
      `hanging`,
      `hankering`,
      `hung`
    ],
    correctAnswer: "A",
    marks: 1,
    type: "options",
  },
  {
    question:
      "Some people believe that “what gets measured, improves”. Some others believe that “what gets measured, gets gamed”. One possible reason for the difference in the beliefs is the work culture in organizations. In organizations with good work culture, metrics help improve outcomes. However, the same metrics are counterproductive in organizations with poor work culture. <br> Which one of the following is the CORRECT logical inference based on the information in the above passage? ",
    options: [
      "Metrics are useful in organizations with poor work culture",
      "Metrics are useful in organizations with good work culture",
      "Metrics are always counterproductive in organizations with good work culture",
      "Metrics are never useful in organizations with good work culture",
    ],
    correctAnswer: "B",
    marks: 2,
    type: "options",
  },
  {
    question:
      "In a recently conducted national entrance test, boys constituted 65% of those who appeared for the test. Girls constituted the remaining candidates and they accounted for 60% of the qualified candidates. <br> Which one of the following is the correct logical inference based on the information provided in the above passage?",
    options: [
      "Equal number of boys and girls qualified ",
      "Equal number of boys and girls appeared for the test",
      "The number of boys who appeared for the test is less than the number of girls who appeared",
      "The number of boys who qualified the test is less than the number of girls who qualified ",
    ],
    correctAnswer: "D",
    marks: 2,
    type: "options",
  },
  {
    question:
      "A box contains five balls of same size and shape. Three of them are green coloured balls and two of them are orange coloured balls. Balls are drawn from the box one at a time. If a green ball is drawn, it is not replaced. If an orange ball is drawn, it is replaced with another orange ball. <br> First ball is drawn. What is the probability of getting an orange ball in the next draw?",
    options: [
      "\\(\\frac{1}{2}\\)",
      "\\(\\frac{8}{25}\\)",
      "\\(\\frac{19}{50}\\)",
      "\\(\\frac{23}{50}\\)",
    ],
    correctAnswer: "D",
    marks: 2,
    type: "options",
  },
  {
    question:
      `The corners and mid-points of the sides of a triangle are named using the distinct letters P, Q, R, S, T and U, but not necessarily in the same order. Consider the following statements: <br> <br> 
       The line joining P and R is parallel to the line joining Q and S.<br> 
       P is placed on the side opposite to the corner T.<br> 
       S and U cannot be placed on the same side <br><br>  Which one of the following statements is correct based on the above information?`,
    options: [
      "P cannot be placed at a corner",
      "S cannot be placed at a corner",
      "U cannot be placed at a mid-point ",
      "R cannot be placed at a corner",
    ],
    correctAnswer: "B",
    marks: 2,
    type: "options",
  },
  {
    question:
      "Archimedes said, “Give me a lever long enough and a fulcrum on which to place it, and I will move the world.” <br>The sentence above is an example of a ___________ statement.",
    options: [
      "figurative",
      "collateral",
      "literal",
      "figurine",
    ],
    correctAnswer: "B",
    marks: 2,
    type: "options",
  },
  {
    question:
      "Let 𝑏 be the branching factor of a search tree. If the optimal goal is reached after 𝑑 actions from the initial state, in the worst case, how many times will the initial state be expanded for iterative deepening depth first search (IDDFS) and iterative Deepening A* search (IDA*)?",
    options: [
      "IDDFS - \\(d\\), IDA* -\\(d\\).",
      "IDDFS - \\(d\\), IDA* -\\(b^d\\).",
      "IDDFS - \\(b^d\\), IDA* -\\(d\\).",
      "IDDFS - \\(b^d\\), IDA* -\\(b^d\\).",
    ],
    correctAnswer: "A",
    marks: 1,
    type: "options",
  },
  {
    question:
         "Given 3 literals \\(A\\), \\(B\\), and \\(C\\), the number of models for the sentence \\(A \\lor \\lnot B \\lor C\\) is ________ .",
  
       correctAnswer: "C",
       marks: 1,
       type: "input",
  },
  {
    question:
      "Which one of the following first order logic sentences matches closest with the sentence “All students are not equal”?",
    options: [
      "∀𝑥 ∃𝑦[𝑠𝑡𝑢𝑑𝑒𝑛𝑡(𝑥) ∧ 𝑠𝑡𝑢𝑑𝑒𝑛𝑡(𝑦)] ⇒ ¬𝐸𝑞𝑢𝑎𝑙(𝑥, 𝑦)",
      "∀𝑥 ∀𝑦[𝑠𝑡𝑢𝑑𝑒𝑛𝑡(𝑥) ∧ 𝑠𝑡𝑢𝑑𝑒𝑛𝑡(𝑦)] ⇒ ¬𝐸𝑞𝑢𝑎𝑙(𝑥, 𝑦)",
      "∀𝑥 ∃𝑦[𝑠𝑡𝑢𝑑𝑒𝑛𝑡(𝑥) ∧ 𝑠𝑡𝑢𝑑𝑒𝑛𝑡(𝑦) ∧ ¬𝐸𝑞𝑢𝑎𝑙(𝑥, 𝑦)]",
      "∀𝑥 ∀𝑦[𝑠𝑡𝑢𝑑𝑒𝑛𝑡(𝑥) ∧ 𝑠𝑡𝑢𝑑𝑒𝑛𝑡(𝑦) ∧ ¬𝐸𝑞𝑢𝑎𝑙(𝑥, 𝑦)]",
    ],
    correctAnswer: "C",
    marks: 1,
    type: "options",
  },
  {
    question:
      "The mean of the observations of the first 50 observations of a process is 12. If the 51st observation is 18, then, the mean of the first 51 observations of the process, rounded off to two decimal places is ______ .",
    options: ["12.01", "12.12", "12.36", "18.18"],
    correctAnswer: "C",
    marks: 1,
    type: "options",
  },
  {
    question:
      "The value of \\(\\lim_{{x \\to 2}} \\frac{{\\sqrt{x} - \\sqrt{2}}}{{x - 2}}\\) is",
    options: [
      "0",
      "\\( \\sqrt{2} \\)",
      "\\( \\frac{1}{2\\sqrt{2}} \\)",
      "\\( \\frac{1}{\\sqrt{2}} \\)",
    ],
    correctAnswer: "C",
    marks: 1,
    type: "options",
  },
  {
    question:
      "Which among the following typically reduces overfitting in a supervised machine learning algorithm?<br><br> i) Increase model complexity. <br> ii) Reduce model complexity. <br> iii) Increase the number of training points. <br> iv) Reduce the number of training points.",
    options: ["i and ii ", "i, ii and iii", "ii and iii ", "i, ii, iii and iv"],
    correctAnswer: "C",
    marks: 1,
    type: "options",
  },
  {
    question:
      "A fair coin is flipped twice, and it is given that at least one tail has been observed. The probability of getting two tails is ",
    options: [
      "\\(\\frac{1}{2}\\)",
      "\\(\\frac{1}{3} \\)",
      "\\(\\frac{2}{3} \\)",
      "\\(\\frac{1}{4} \\)",
    ],
    correctAnswer: "C",
    marks: 1,
    type: "options",
  },
  {
    question:
      "Given n particles and m (> n)  boxes, we place each particle in one of the boxes uniformly at random. What is the probability that no box receives more than one particle? ",
    options: [
      "\\(\\frac{n!}{(m - n)! \\ m^n}\\)",
      "\\(\\frac{m!}{(m - n)! \\ m^n}\\)",
      "\\(\\frac{1}{m^n}\\)",
      "\\(\\frac{(m - n)!}{m!}\\)",
    ],
    correctAnswer: "C",
    marks: 1,
    type: "options",
  },
  {
    question:
      "For two events \\(A\\) and \\(B\\), \\(B\\) ⊂ \\(A\\), which one of the following is correct? ",
    options: [
      "\\(P(B | A) \\geq P(B)\\)",
      "\\(P(B | A) \\leq P(B)\\)",
      "\\(P(A | B) < 1\\)",
      "\\(P(A | B) = 0\\)",
    ],
    correctAnswer: "C",
    marks: 1,
    type: "options",
  },
  {
    question:
      "\\(X\\) is a random variable with support [-2,2] \\(\\cup\\) [99.5,100.5]. The PDF of \\(X\\) is such that it is equal to a constant \\(c\\) inside its support and 0 outside. The expected value of \\(X\\) is ________ .",

    correctAnswer: "C",
    marks: 1,
    type: "input",
  },
  {
    question:
      "A binary classification dataset contains only 5% of positive instances. Which one of the following experimental design and performance measures is most suited for measuring the generalizability of a classifier trained on this dataset?",
    options: [
      "fixed training and test sets, accuracy",
      "fixed training and test sets, area under the ROC curve",
      "stratified cross-validation, accuracy ",
      "stratified cross-validation, area under the ROC curve",
    ],
    correctAnswer: "C",
    marks: 1,
    type: "options",
  },
  {
    question:
      "Increasing the regularisation coefficient value in ridge regression will typically: <br><br> i) Increase the bias of the resulting model. <br> ii) Decrease the bias of the resulting model. <br> iii) Increase the variance of the resulting model. <br> iv) Decrease the variance of the resulting model.<br><br>Which of the following statements are correct?",
    options: [
      "i and iii only ",
      "i and iv only ",
      "ii and iii only  ",
      "ii and iv only",
    ],
    correctAnswer: "C",
    marks: 1,
    type: "options",
  },
  {
    question:
      "A decision tree classifier learned from a fixed training set achieves 100% accuracy on the test set. Which of the following algorithms trained using the same training set is guaranteed to give a model with 100% accuracy?<br><br> i) Logistic regression. <br> ii) An SVM with a polynomial kernel. <br> iii) k-Nearest neighbours. <br> iv) Naïve Bayes classifier.",
    options: ["i only", "i and ii only", "i, ii, iii and iv", "iv only"],
    correctAnswer: "C",
    marks: 1,
    type: "options",
  },
  {
    question:
      "Consider two relations  \\(R(x, y)\\)  and \\(S(x,z)\\). Relation \\(R\\) has 100 records, and relation \\(S\\) has 200 records. What will be the number of attributes and records of the following query? <br><br> SELECT * from R CROSS JOIN S;",
    options: [
      "3 attributes, 20000 records",
      "4 attributes, 20000 records",
      "3 attributes, 200 records",
      "4 attributes, 200 records",
    ],
    correctAnswer: "C",
    marks: 1,
    type: "options",
  },
  {
    question:
      "Consider two relations \\(R(x, y)\\) and \\(S(y)\\), and perform the following operation <br><br>  \\(R(x, y)\\)  DIVIDE  \\(S(Y)\\) <br><br> If \\(X\\) is the relation returned by the above operation, which of the following option(s) is/are always TRUE? ",
    options: ["|X| ≤ |R|", "|X| ≤ |S|", "X| ≤ |R| AND |X| ≤ |S|", "|X| > |R|"],
    correctAnswer: "C",
    marks: 1,
    type: "options",
  },
  {
    question: "Which of the following statements is/are TRUE?",
    options: [
      "Every relation in BCNF is also in 3NF. ",
      "Every relation with two attributes is in BCNF. ",
      "No relation can be in both BCNF and 3NF.",
      "Every relation in 3NF is also in BCNF. ",
    ],
    correctAnswer: "C",
    marks: 1,
    type: "options",
  },
  {
    question:
      "For matrix \\(H = \\begin{bmatrix}3 & -1 \\\\-1 & 3\\end{bmatrix}\\), one of the eigenvalues is 5. The other eigenvalue is",
    options: ["12", "10", "8", "6"],
    correctAnswer: "B",
    marks: 1,
    type: "options",
  },
  {
    question:
      "Two non-zero vectors \\(x\\) and \\(y\\) are perpendicular if",
    options: [
      "\\(x^Ty = 0\\)",
      "\\(x^Ty > 0 \\)",
      "\\(x^Ty < 0 \\)",
      "\\(x^Ty ≠ 0 \\)",
    ],
    correctAnswer: "A",
    marks: 1,
    type: "options",
  },
  {
    question: "The function  \\( f(x) = 1 + x + x^2 \\) has a",
    options: [
      "Saddle point at x = -0.5",
      "Maxima at x = -0.5",
      "Minima at x = -0.5",
      "f'(x) ≠ 0 at x = -0.5",
    ],
    correctAnswer: "C",
    marks: 1,
    type: "options",
  },
  {
    question: "Given the following input (4322, 1334, 1471, 9679, 1989, 6171, 6173, 4199) and the hash function x mod 10, which of the following statements are true? <br><br> i) 9679, 1989, 4199 hash to the same value <br> ii) 1471, 6171 has to the same value <br> iii) All elements hash to the same value <br> iv) Each element hashes to a different value",
    options: [
      "i only",
      "ii only",
      "i and ii only",
      "iii or iv",
    ],
    correctAnswer: "C",
    marks: 1,
    type: "options",
  },
  {
    question:
      "The worst-case running times of Insertion sort, Merge sort, and Quick sort respectively are",
    options: [
      "\\(O(n \\log n), O(n^2), O(n^2)\\)",
      "\\(O(n^2), O(n \\log n), O(n \\log n)\\)",
      "\\(O(n^2), O(n \\log n), O(n^2)\\)",
      "\\(O(n^2), O(n^2), O(n \\log n)\\)",
    ],
    correctAnswer: "D",
    marks: 1,
    type: "options",
  },
  {
    question:
      "Consider the following program.<p style='font-weight: 500'><br>def func(n): <br><br> &nbsp; &nbsp; if n <= 1: <br> &nbsp; &nbsp; &nbsp; return n <br> &nbsp; &nbsp; else:<br> &nbsp; &nbsp; &nbsp; return 3 * func(n - 3) - 3 * func(n - 2)</p>The running time of the above function is",
    "options": [
      "\\(O(n)\\)",
      "\\(O(n^2)\\)",
      "\\(O(n \\log n)\\)",
      "\\(O(2^n)\\)"
    ],
    correctAnswer: "B",
    marks: 1,
    type: "options",
  },
  {
    question: `Which one of the following equations correctly describes the recurrence relation for the standard binary search algorithm on a sorted array of  \\(n\\)  numbers where \\(c\\) is a constant?`,
    options: [
      "\\( T(n) = 2T(n/2) + c \\)",
      "\\( T(n) = T(n/2) \\)",
      "\\( T(n) = T(n-1) + c \\)",
      "\\( T(n) = T(n/2) + c \\)",
    ],
    correctAnswer: "A",
    marks: 1,
    type: "options",
  },
  {
    question:
      "Consider the following python program:<br><br><p style='font-weight: 500'>def func(A, n, m): <br>&nbsp; s = A[0]  <br> &nbsp; for i in range(1, n-1):<br> &nbsp; &nbsp; &nbsp;  m = m * s + A[i] <br> &nbsp; return m </p><br> Let Z be an array of 10 elements with Z[i] = 2 for all i such that 0<=i<=9. <br> The value returned by func(Z, 10, 2) is ________.",
    correctAnswer: "C",
    marks: "1",
    type: "input",
  },
  {
    question: "Two eigenvalues of a 3x3 real matrix <b>X</b> are (1 + i) and 2. The determinant of the matrix is _____.",
    correctAnswer: "D",
    marks: "1",
    type: "input",
  },
  {
    question:
      "Given the following relation instances <br><br> \\[\\begin{array}{ccc} X & Y & Z \\\\ 1 & 4 & 2 \\\\ 1 & 5 & 3 \\\\ 1 & 4 & 3 \\\\ 1 & 5 & 2 \\\\3 & 2 & 1 \\\\ \\end{array} \\] <br>Which of the following conditions is/are TRUE?",
    options: ["XY → Z and Z → Y", "YZ → X and X → Y", "Y → X and X → Y", "XZ → Y and Y → X"],
    correctAnswer: "C",
    marks: 2,
    type: "options",
  },
  {
    question:
      "Assume that the algorithms considered here sort the input sequences in ascending order. If the input is already in ascending order, which of the following are TRUE? <br><br> I. Quicksort runs in (n2) time<br> II. Bubblesort runs in (n2) time<br> III. Mergesort runs in (n) time <br> IV. Insertion sort runs in (n) time",
    options: [
      "I and II only", 
      "I and III only", 
      "II and IV only", 
      "I and IV only"],
    correctAnswer: "D",
    marks: 2,
    type: "options",
  },
  {
    question:
      "Given a 𝐾-class dataset containing 𝑁 points, where sample points are described using 𝐷 discrete features with each feature capable of taking 𝑉 values, how many parameters need to be estimated for Naïve Bayes Classifier?",
    options: [
      "\\(V^DK \\)", 
      "\\(K^{V^D} \\)", 
      "\\(VDK + K \\)", 
      "\\(K(V + D) \\)"],
    correctAnswer: "C",
    marks: 2,
    type: "options",
  },
  {
    question:
      "A maximum margin linear SVM (SVM1) is learned for a binary classification task. Another maximum margin linear SVM (SVM2) is trained for the same task using the same training set but with one of the non-support vectors of SVM1 removed. Which one of the following statements is TRUE?",
    options: [
      "Margin of SVM1 > Margin of SVM2",
      "Margin of SVM2 > Margin of SVM1",
      "Margin of SVM1 = Margin of SVM2",
      "No conclusion can be drawn between the margins of SVM1 and SVM2",
    ],
    correctAnswer: "A",
    marks: 2,
    type: "options",
  },
  {
    question:
      "For perfectly spherical 2D data centered at the origin, which <b>all</b> of the following pairs of vectors are possible pairs of principal components? <br><br> i) (1, 0) and (0, 1) <br> ii) (0, -1) and (-1, 0) <br> iii) (1, 1) and (1, 0) ",
    options: [
      "i only",
      "i and iii only ",
      "i, ii, and iii only",
      "i and ii only ",
    ],
    correctAnswer: "A",
    marks: 2,
    type: "options",
  },
  {
    question:
      "The preorder traversal of a binary search tree is 15, 10, 12, 11, 20, 18, 16, 19. Which one of the following is the postorder traversal of the tree?",
    options: [
      "20, 19, 18, 16, 15, 12, 11, 10",
      "10, 11, 12, 15, 16, 18, 19, 20",
      "11, 12, 10, 16, 19, 18, 20, 15",
      "19, 16, 18, 20, 11, 12, 10, 15",
    ],
    correctAnswer: "C",
    marks: 2,
    type: "options",
  },
  {
    question:
      "A table has fields, F1, F2, F3, F4, F5, with the following functional dependencies:<br><br> F1 → F3.F2 → F4.(F1.F2) → F5 in terms of Normalization, this table is in",
    options: [
      "1NF",
      "2NF",
      "3NF",
      "None of these",
    ],
    correctAnswer: "A",
    marks: 2,
    type: "options",
  },
  {
    question: "X is a uniformly distributed random variable from 0 to 1. <br> <br> \\( f(x) = \\begin{cases} 1, & 0 \\leq x \\leq 1 \\\\ 0, & \\text{otherwise} \\end{cases} \\) <br> <br> The variance of X is",
    options: [
      `\\( \\frac{1}{2} \\)`,
      `\\( \\frac{1}{3} \\)`,
      `\\( \\frac{1}{4} \\)`,
      `\\( \\frac{1}{12} \\)`],
    correctAnswer: "A",
    marks: 2,
    type: "options",
  },
  {
    question: `The function \\(f(x) = 1 + 2x + 3x^2 + ⋯ + 2026x^{2025} \\). <br>Which of the following statements is true?`,
    options: [
      `\\(f(x)\\) has a global minimum.`,
      `\\(f(x)\\) has a global maximum.`,
      `\\(f(x)\\) does not have a global minimum.`,
      `\\(f(x)\\) is not continuous.`,
    ],
    correctAnswer: "B",
    marks: 2,
    type: "options",
  },
  {
    question:
      "Consider the following statements:<br><br> (P): A smooth twice differentiable function can have a global minimum. <br>(Q): All smooth twice differentiable functions have a global minimum.",
    options: [
      "P and Q are true.",
      "P is true and Q is false.",
      "P is false and Q is true.",
      "P and Q are false.",
    ],
    correctAnswer: "A",
    marks: 2,
    type: "options",
  },
  {
    question:
      "Consider the following joint distribution of random variables \\(X\\) and \\(Y\\): \\[ f(x, y) = \\begin{cases} \\frac{x(1 + 3y^2)}{4}, & 0 \\leq x \\leq 2, \\ 0 \\leq y \\leq 1 \\\\ & 0, \\text{otherwise} \\end{cases} \\] Which of the following is the conditional PDF of \\(X|Y\\)?",
    options: [
      "\\( \\frac{x}{4} \\)",
      "\\( \\frac{y}{4} \\)",
      "\\( \\frac{x}{2} \\)",
      "\\( \\frac{y}{2} \\)",
    ],
    correctAnswer: "A",
    marks: 2,
    type: "options",
  },
  {
    question:
      "For the matrix 𝐻 = \\( \\begin{bmatrix} 3 & -1 \\\\ -1 & 3 \\\\ \\end{bmatrix} \\), one of the eigenvectors is \\( \\left[ \\begin{array}{cc} -1 & -1 \\end{array} \\right]^T \\). <br> The other eigenvector is",
    options: [
      "\\( \\left[ \\begin{array}{cc} 1 & -1 \\end{array} \\right]^T \\)",
      "\\( \\left[ \\begin{array}{cc} 1 & 1 \\end{array} \\right]^T \\)",
      "\\( \\left[ \\begin{array}{cc} 1 & 0 \\end{array} \\right]^T \\)",
      "\\( \\left[ \\begin{array}{cc} 0 & 1 \\end{array} \\right]^T \\)",
    ],
    correctAnswer: "A",
    marks: 2,
    type: "options",
  },
  {
    question:
      "The following statements are made regarding a matrix \\(A_{m \\times n}\\) <br><br> P. The column space is orthogonal to the row space. <br> Q. The column space is orthogonal to the left null space. <br> R. The row space is orthogonal to the null space. <br> T. The null space is orthogonal to the left null space. <br> <br>Which of the following statements are true? ",
    options: [
      "P and Q only",
      "P and R only",
      "Q and R only",
      "P and T only",
    ],
    correctAnswer: "A",
    marks: 2,
    type: "options",
  },
  {
    question:
      "Consider a matrix \\(\\begin{bmatrix} 0 & 1 & 0 \\\\ a & 2 & d \\\\ b & 3 & c \\\\ \\end{bmatrix}\\). The matrix cannot have rank",
    options: [
      "0",
      "1",
      "2",
      "3",
    ],
    correctAnswer: "A",
    marks: 2,
    type: "options",
  },
  {
    question:
      "A file with 100,000 records is indexed with B+ tree. If the size of a memory block is 2K bytes, the size of a key is 4 bytes, the size of a pointer is 4 bytes, the minimum possible height of the B+ tree index is ______. Height is always greater than or equal to 1.<br><br> Hints: No records are stored in the nodes, only keys are stored. The sizes of the pointers are same, irrespective of whether they point to a node or a record.",
    correctAnswer: "A",
    marks: 2,
    type: "input",
  },
  {
    question:
      "Consider a schema R(A, B, C, D, E, F) and functional dependencies A → B, C → D, and E → F. The number of superkeys of this schema is _____.",
    correctAnswer: "A",
    marks: 2,
    type: "input",
  },
  {
    question:
      "Given the dataset: (1, 1), (3, 3), (4, 4), (5, 5), (6, 6), (9, 9), (0, 3), (3, 0) and assuming the initial centroids for (𝐾 = 3 – means clustering) to be \\(C_1 \\) = (3, 3), \\(C_2 \\) = (5, 5) 𝑎𝑛𝑑 \\(C_3 \\) = (6, 6). One iteration of the Expectation Maximization Algorithm for 𝐾-means clustering, will update \\(C_3 \\) to (a, a). The value of a is ____ .",
    correctAnswer: "A",
    marks: 2,
    type: "input",
  },
  {
    question:
      "Consider a Multi-Layer Perceptron (MLP) model with one hidden layer and one output layer. The hidden layer has 10 neurons, and the output layer has 3 neurons. The input to the MLP is a 5-dimensional vector. Each neuron is connected to every neuron in the previous layer, and a bias term is included for each neuron. The activation function used is the sigmoid function. The total number of trainable parameters in this MLP model is ______. ",
    correctAnswer: "A",
    marks: 2,
    type: "input",
  },
  {
    question:
      "A company is manufacturing a product at the rate of P units per day. The cost per unit in Rs is 𝐶 = 230 + 0.1𝑃 + 9000/𝑃. The selling prices per unit is Rs. 300. The production level minimizing the cost per unit and the total profit per day, respectively, are",
    options: ["290, 3000 ", "150, 2500 ", "290, 2500", "150, 3000"],
    correctAnswer: "A",
    marks: 2,
    type: "options",
  },
  {
    question:
      "A class contains 60% of students who are incapable of changing their opinions about anything, and 40% of students are changing their minds at random, with probability 0.3, between subsequent votes on the same issue. Then, the probability of a student randomly chosen voted twice in the same way is _______.",
    correctAnswer: "A",
    marks: 2,
    type: "input",
  },
  {
    question: `______ is the partition approach of grouping similar data.`,
    options: ["k-means", "k-nearest", "Approximate Nearest Neighbor", "Hierarchical Agglomerative Clustering"],
    correctAnswer: "A",
    marks: 2,
    type: "options",
  },
  {
    question: `Let {O1, O2, O3, O4} represent the possible outcomes of a random experiment, 
    with Pr({O1}) = Pr({O2}) = Pr({O3}) = Pr({O4}). Consider the following 
    events: P = {O1,O2}, Q = {O2,O3}, R = {O3,O4}, S = {O1,O2,O3}. <br>
    Then, which of the following statements are true?`,
    options: [
      "P and Q are independent ", 
      "P and Q are not independent ", 
      "R and S are independent ", 
      "Q and S are not independent"],
    correctAnswer: "A",
    marks: 2,
    type: "options",
  },
  {
    question: `Consider the matrix <b>X</b> whose eigenvalues are 1, ‒1 and 3. The Trace of \\(X^3 - 3X^2 \\) is _______. 
`,
    correctAnswer: "A",
    marks: 2,
    type: "input",
  },
  {
    question: `What is the output of the following python program? <br>
    <pre style='font-weight: 800', 'font-size: 20px'>
        i = 1 
        j = 1 
        for i in range(1, 11): 
          if i % 3 != 0: 
            j += 2 
            continue 
          if j % 3 == 0: 
            break 
          print(i + j) </pre>`,

    options: ["3", "5", "12", "15"],
    correctAnswer: "A",
    marks: 2,
    type: "options",
  },
  {
    question: `Assume that S is a stack and Q1 and Q2 are two Queues which support the 
    Enqueue and Dequeue operations. Consider the following pseudo code for 
    implementing the Pop and Push operation on S. [Note: Swap(x,y) exchanges 
    the two queues x and y.] <br><br>
    <pre style='font-weight: 800'>
              Push(S,x) 
                    A(Q2,x) 
                    while(Q1 not empty) 
                          B(Q2, C(Q1)); 
                    Swap(Q1, Q2) 
              Pop(S)  
                    return(D(Q1)) 
</pre> Which of the following options for the functions A, B, C, and D correspond to 
correctly implementing the Push and Pop operations on the stack S?`,
    options: [
      "A,B - Enqueue C,D - Dequeue", 
      "A,C - Enqueue B, D - Dequeue", 
      "A,C - Dequeue B,D- Enqueue", 
      "A,D - Enqueue B,C - Dequeue"],
    correctAnswer: "A",
    marks: 2,
    type: "options",
  },
  {
    question: `Consider the following python program. <br> <br>
    <p style='font-weight: 500'>
  &nbsp; import math <br> 
  &nbsp; &nbsp; def fun(a, b, d): <br> 
  &nbsp; &nbsp; &nbsp; n1 = 0 <br> 
  &nbsp; &nbsp; &nbsp; n2 = 0 <br> 
  &nbsp; &nbsp; &nbsp; flag = 1 <br> 
  &nbsp; &nbsp; &nbsp; for i in range(d): <br> 
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; n1 = n1 + (a[i] * a[i]) <br> 
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; n2 = n2 + (b[i] * b[i]) <br> 
  &nbsp; &nbsp; &nbsp; for i in range(d): <br> 
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; a[i] = a[i]/math.sqrt(n1) <br> 
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; b[i] = b[i]/math.sqrt(n2) <br> 
  &nbsp; &nbsp; &nbsp; for i in range(d): <br> 
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if a[i] != b[i]: <br> 
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; flag = 0 <br> 
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; break <br> 
 return flag </p> 
For which of the following inputs does the above algorithm produce 1 as an 
output? <br> 
(P) a = [1,2,3,4]; b = [3,4,5,6], d = 4 <br> 
(Q) a = [1,2,3,4]; b = [2,4,6,8], d = 4 <br> 
(R) a = [1,2,3,4]; b = [10,20,30,40], d = 4 <br> 
(S) a = [1,2,3,4]; b = [1.1,2.1,3.1,4.1], d = 4  
   `,
    options: ["P, Q, R, S", "Q, R, S only", "Q, R only", "R, S only"],
    correctAnswer: "A",
    marks: 2,
    type: "options",
  },
  {
    question: `What is the worst case time complexity of inserting n elements into an empty linked list, if the linked list needs to be maintained in sorted order?`,
    options: [
      "\\((n^2)\\)", 
      "\\((n)\\)", 
      "\\((n \\log n)\\)",
      "Both A and C"],
    correctAnswer: "D",
    marks: 2,
    type: "options",
  },
  {
    question: `Let \\(S^2 \\) be the variance of a random sample of size n > 1 from a normal population with an unknown mean 𝜇 and an unknown finite variance \\(\\sigma^2 \\). 
  Consider the following statements: <br><br>
   (I) \\(S^2 \\) is an unbiased estimator of \\(\\sigma^2 \\), and \\(S \\) is an unbiased estimator of 𝜎. <br>
  (II) (n-1/n) \\(S^2 \\) is a maximum likelihood estimator of \\(\\sigma^2 \\), and \\(\\sqrt{\\frac{n-1}{n}}\\) S is a maximum likelihood estimator of 𝜎. <br>Which of the above statements is true? `,
    options: [
      "(I) only",
      "(II) only",
      "Both (I) and (II)",
      "Neither (I) nor (II)",
    ],
    correctAnswer: "A",
    marks: 2,
    type: "options",
  },
  {
    question: `The value of the real variable \\(x ≥ 0 \\), which maximizes the function  
  \\(f(x) = x^e e^{-x} \\) is_____. <br>(rounded off to two decimal places)`,
    correctAnswer: "A",
    marks: 2,
    type: "input",
  },
  {
    question: `Consider the following relational schema: <br> <br>
  <b>employee(empId,empName,empDept) <br>
  customer(custId,custName,salesRepId,rating) <br>
  salesRepId</b> is a foreign key referring to empId of the employee relation. 
  Assume that each employee makes a sale to at least one customer. What does 
  the following query return? <br><br>
  <p style='font-weight: 500'>
  SELECT empName <br>
  FROM employee E <br>
  WHERE NOT EXISTS (SELECT custId <br>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; FROM customer C <br>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; WHERE C.salesRepId = E.empId <br>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; AND C.rating <> ’GOOD’); </p>
  
`,
    options: [
      "Names of all the employees with at least one of their customers having a ‘GOOD’ rating.",
      "Names of all the employees with at most one of their customers having a ‘GOOD’ rating.",
      "Names of all the employees with none of their customers having a ‘GOOD’ rating.",
      "Names of all the employees with all their customers having a ‘GOOD’ rating.",
    ],
    correctAnswer: "A",
    marks: 2,
    type: "options",
  },
];

// QuestionModel.insertMany(data);


const insertUniqueQuestions = async (options) => {
  let startTime = Date.now(); // Track start time
  try {
    // Check if questions already exist in the database
    const existingQuestions = await QuestionModel.find({}, 'question');
    const newData = data.filter(newQuestion => !existingQuestions.some(existingQuestion => existingQuestion.question === newQuestion.question));

    if (newData.length === 0) {
      console.log('No new questions to insert');
      return;
    }

    // Insert only unique questions
    const result = await QuestionModel.insertMany(newData, options);
    let endTime = Date.now(); // Track end time
    let elapsedTime = endTime - startTime; // Calculate elapsed time
    console.log(`${result.length} questions inserted successfully in ${elapsedTime} milliseconds`);

    // Update highest time if the current time is higher
    if (elapsedTime > highestTime) {
      highestTime = elapsedTime;
    }
  } catch (error) {
    console.error("Error inserting questions:", error);
  }
};

// Call insertUniqueQuestions function with options
insertUniqueQuestions({ timeout: 60000 }) // Increase timeout to 30 seconds
  .then(() => {
    console.log('Data insertion completed successfully');
    console.log('Highest time taken:', highestTime, 'milliseconds');
  })
  .catch((error) => {
    console.error('Error inserting data:', error);
  });

// let highestTime = 0; // Variable to store the highest time

// const insertQuestions = async (options) => {
//   let startTime = Date.now(); // Track start time
//   try {
//     const result = await QuestionModel.insertMany(data, options);
//     let endTime = Date.now(); // Track end time
//     let elapsedTime = endTime - startTime; // Calculate elapsed time
//     console.log(`${result.length} questions inserted successfully in ${elapsedTime} milliseconds`);
    
//     // Update highest time if the current time is higher
//     if (elapsedTime > highestTime) {
//       highestTime = elapsedTime;
//     }
//   } catch (error) {
//     console.error("Error inserting questions:", error);
//   } 
//   // finally {
//   //   mongoose.disconnect(); // Close the database connection after insertion
//   // }
// };

// // Call insertQuestions function with options
// insertQuestions({ timeout: 60000 }) // Increase timeout to 30 seconds
//   .then(() => {
//     console.log('Data insertion completed successfully');
//     console.log('Highest time taken:', highestTime, 'milliseconds');
//   })
//   .catch((error) => {
//     console.error('Error inserting data:', error);
//   });



