interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  /* startTrial: () => string; */
  startTrial(): string;
  getCoupon(couponname: string, value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const hitest: Admin = {
  dbId: 22,
  role: "admin",
  email: "test",
  userId: 1,
  githubToken: "github",
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (name: "David10", off: 10) => {
    return 100;
  },
};
hitest.email = "test@";
