export const examData = [
  {
    id: "q1",
    type: "mcq",
    question: "Cho hàm số $y = \\begin{cases} x, \\text{khi } x \\geq 0 \\\\ -x, \\text{khi } x < 0 \\end{cases}$. Khẳng định nào dưới đây đúng?",
    options: [
      "Hàm số không có đạo hàm tại $x = 0$",
      "$y'_{(0)} = 1$",
      "$y'_{(0)} = 0$",
      "$y'_{(0)} = -1$"
    ],
    correctAnswer: 0,
    explanation: "Hàm số đã cho chính là hàm số $y = |x|$. Tại $x = 0$, giới hạn trái của $\\frac{\\Delta y}{\\Delta x}$ là $-1$, giới hạn phải là $1$. Do giới hạn trái và phải khác nhau nên hàm số không có đạo hàm tại $x = 0$.",
    image: null
  },
  {
    id: "q2",
    type: "mcq",
    question: "Thời gian chạy 50m của 20 học sinh được ghi lại trong bảng dưới đây:\n\n| Thời gian (giây) | 8,3 | 8,4 | 8,5 | 8,7 | 8,8 |\n|---|---|---|---|---|---|\n| Tần số | 2 | 3 | 9 | 5 | 1 |\n\nSố trung bình cộng thời gian chạy của học sinh là:",
    options: [
      "8,54",
      "4",
      "8,50",
      "8,53"
    ],
    correctAnswer: 3,
    explanation: "Số trung bình cộng được tính bằng công thức: $\\bar{x} = \\frac{8,3 \\times 2 + 8,4 \\times 3 + 8,5 \\times 9 + 8,7 \\times 5 + 8,8 \\times 1}{20} = \\frac{170,6}{20} = 8,53$.",
    image: null
  },
  {
    id: "q3",
    type: "fill",
    question: "Chu kì của hàm số $y = \\sin\\left(\\frac{2}{5}x\\right) \\cdot \\cos\\left(\\frac{2}{5}x\\right)$ là $k\\pi$. Giá trị của $k$ là",
    correctAnswer: "2.5",
    explanation: "Ta có $y = \\sin\\left(\\frac{2}{5}x\\right) \\cdot \\cos\\left(\\frac{2}{5}x\\right) = \\frac{1}{2}\\sin\\left(\\frac{4}{5}x\\right)$.\nChu kì của hàm số $y = \\sin(ax)$ là $T = \\frac{2\\pi}{|a|}$.\nDo đó, chu kì của hàm số đã cho là $T = \\frac{2\\pi}{\\frac{4}{5}} = \\frac{5\\pi}{2} = 2,5\\pi$.\nVậy $k = 2,5$.",
    image: null
  },
  {
    id: "q4",
    type: "mcq",
    question: "Cho hàm số $y = f(x)$ có bảng biến thiên như sau:\n*(Xem hình ảnh bảng biến thiên trong đề)*\nTổng số đường tiệm cận ngang và tiệm cận đứng của đồ thị hàm số đã cho là",
    options: [
      "0",
      "1",
      "2",
      "3"
    ],
    correctAnswer: 2,
    explanation: "Từ bảng biến thiên, ta thấy:\n- $\\lim_{x \\to -\\infty} y = -2 \\Rightarrow$ Đồ thị có 1 tiệm cận ngang là $y = -2$.\n- $\\lim_{x \\to 0^-} y = -\\infty \\Rightarrow$ Đồ thị có 1 tiệm cận đứng là $x = 0$.\nVậy tổng số đường tiệm cận là 2.",
    image: "cau_4.png"
  },
  {
    id: "q5",
    type: "mcq",
    question: "Tìm nguyên hàm $F(t) = \\int t x dt$.",
    options: [
      "$F(t) = x + t + C$",
      "$F(t) = \\frac{x^2 t}{2} + C$",
      "$F(t) = \\frac{x t^2}{2} + C$",
      "$F(t) = \\frac{(tx)^2}{2} + C$"
    ],
    correctAnswer: 2,
    explanation: "Biến lấy tích phân ở đây là $t$, do đó $x$ được xem là hằng số.\nTa có: $\\int t x dt = x \\int t dt = x \\cdot \\frac{t^2}{2} + C = \\frac{x t^2}{2} + C$.",
    image: null
  }
];
