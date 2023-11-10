import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}


// 先说结论, 淘宝算法多扣了我1.54! 建议姐妹们查一下自己的订单是不是有多扣费的情况, 有的话一定要投诉!

// 图一：淘宝订单详情
// 购物金1530, 实际付款119.41。这里的购物金时充1500送30, 估计遇上银行满减了, 所以实际花费金额为 1498 + 119.41=1617.41

// 图二：淘宝退款详情
// 购物金1525.60, 实际退款119.07。这里的购物金和实际退款都少了!

// 图三：淘宝订单与退款对比
// 很明显退款计算方式和付款计算方式不同，导致退款金额不同。

// 图四：购物金退款1495.69, 不知道为什么还要退回优惠1.99, 明明都是我本金, 还需要退回优惠?

// 最后购物金退了1493.70, 实际退款119.07， 之前申请价保退了我5.1, 所以最后实际收到的退款金额为 1493.70 + 119.07 + 5.1=1617.87