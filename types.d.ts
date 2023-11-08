type GrowAccount = {
  id: string;
  growid?: string;
  password?: string;
  status?: string;
  world?: string;
  ping?: number;
};

type Data = GrowAccount & {
  created_at?: string;
};
