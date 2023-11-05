type GrowAccount = {
  id: string;
  growId?: string;
  password?: string;
  status?: string;
  world?: string;
  ping?: number;
};

type Data = GrowAccount & {
  created_at?: {
    seconds: number;
    nanoseconds: number;
  };
};
