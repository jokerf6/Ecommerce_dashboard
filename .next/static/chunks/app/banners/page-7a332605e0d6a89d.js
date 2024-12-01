(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[730],{30450:(e,t,a)=>{Promise.resolve().then(a.bind(a,22062))},22062:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>es});var s=a(95155),r=a(12115),l=a(43415);let n=(0,a(99827).v)(e=>({formSchema:null,defaultValues:{},fields:[],setFormSchema:t=>e({formSchema:t}),setDefaultValues:t=>e({defaultValues:t}),setFields:t=>e({fields:t})}));var d=a(85060),o=a(69606),i=a(12317),c=a(21567),m=a(98986);let u=r.createContext({}),f=e=>{let{...t}=e;return(0,s.jsx)(u.Provider,{value:{name:t.name},children:(0,s.jsx)(o.xI,{...t})})},x=()=>{let e=r.useContext(u),t=r.useContext(p),{getFieldState:a,formState:s}=(0,o.xW)(),l=a(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:n}=t;return{id:n,name:e.name,formItemId:"".concat(n,"-form-item"),formDescriptionId:"".concat(n,"-form-item-description"),formMessageId:"".concat(n,"-form-item-message"),...l}},p=r.createContext({}),h=r.forwardRef((e,t)=>{let{className:a,...l}=e,n=r.useId();return(0,s.jsx)(p.Provider,{value:{id:n},children:(0,s.jsx)("div",{ref:t,className:(0,c.cn)("space-y-2",a),...l})})});h.displayName="FormItem";let j=r.forwardRef((e,t)=>{let{className:a,...r}=e,{error:l,formItemId:n}=x();return(0,s.jsx)(m.J,{ref:t,className:(0,c.cn)(l&&"text-destructive",a),htmlFor:n,...r})});j.displayName="FormLabel";let b=r.forwardRef((e,t)=>{let{...a}=e,{error:r,formItemId:l,formDescriptionId:n,formMessageId:d}=x();return(0,s.jsx)(i.DX,{ref:t,id:l,"aria-describedby":r?"".concat(n," ").concat(d):"".concat(n),"aria-invalid":!!r,...a})});b.displayName="FormControl",r.forwardRef((e,t)=>{let{className:a,...r}=e,{formDescriptionId:l}=x();return(0,s.jsx)("p",{ref:t,id:l,className:(0,c.cn)("text-[0.8rem] text-muted-foreground",a),...r})}).displayName="FormDescription";let N=r.forwardRef((e,t)=>{let{className:a,children:r,...l}=e,{error:n,formMessageId:d}=x(),o=n?String(null==n?void 0:n.message):r;return o?(0,s.jsx)("p",{ref:t,id:d,className:(0,c.cn)("text-[0.8rem] font-medium text-destructive",a),...l,children:o}):null});N.displayName="FormMessage";var g=a(33900),v=a(73312);function y(e){let{formSchema:t,defaultValues:a,fields:r}=e,l=(0,o.mN)({resolver:(0,d.u)(t),defaultValues:a});return(0,s.jsx)(o.Op,{...l,children:(0,s.jsxs)("form",{onSubmit:l.handleSubmit(function(e){console.log(e)}),className:"space-y-2",children:[r.map((e,t)=>(0,s.jsx)(f,{control:l.control,name:e.name,render:t=>{let{field:a}=t;return(0,s.jsxs)(h,{children:[(0,s.jsx)(j,{children:e.label}),(0,s.jsx)(b,{children:(0,s.jsx)(g.p,{placeholder:e.placeholder,...a})}),(0,s.jsx)(N,{})]})}},t)),(0,s.jsx)("div",{className:" flex flex-row-reverse",children:(0,s.jsx)(v.$,{type:"submit",children:"Submit"})})]})})}function w(e){let{title:t,formSchema:a,fields:r,defaultValues:l}=e;return(0,s.jsxs)("div",{className:"w-full flex flex-col gap-4",children:[(0,s.jsxs)("h1",{className:"text-xl font-bold",children:["Create New ",t]}),(0,s.jsx)(y,{formSchema:a,fields:r,defaultValues:l})]})}let C=[{accessorKey:"status",header:"Status"},{accessorKey:"email",header:"Email"},{accessorKey:"amount",header:"Amount"}];var R=a(89789),S=a(19083),F=a(80937),k=a(46967),A=a(98867),V=a(33565);let _=F.bL,z=F.l9;F.YJ,F.ZL,F.Pb,F.z6,r.forwardRef((e,t)=>{let{className:a,inset:r,children:l,...n}=e;return(0,s.jsxs)(F.ZP,{ref:t,className:(0,c.cn)("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",r&&"pl-8",a),...n,children:[l,(0,s.jsx)(k.A,{className:"ml-auto"})]})}).displayName=F.ZP.displayName,r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(F.G5,{ref:t,className:(0,c.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...r})}).displayName=F.G5.displayName;let M=r.forwardRef((e,t)=>{let{className:a,sideOffset:r=4,...l}=e;return(0,s.jsx)(F.ZL,{children:(0,s.jsx)(F.UC,{ref:t,sideOffset:r,className:(0,c.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...l})})});M.displayName=F.UC.displayName,r.forwardRef((e,t)=>{let{className:a,inset:r,...l}=e;return(0,s.jsx)(F.q7,{ref:t,className:(0,c.cn)("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",r&&"pl-8",a),...l})}).displayName=F.q7.displayName;let P=r.forwardRef((e,t)=>{let{className:a,children:r,checked:l,...n}=e;return(0,s.jsxs)(F.H_,{ref:t,className:(0,c.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),checked:l,...n,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(F.VF,{children:(0,s.jsx)(A.A,{className:"h-4 w-4"})})}),r]})});P.displayName=F.H_.displayName,r.forwardRef((e,t)=>{let{className:a,children:r,...l}=e;return(0,s.jsxs)(F.hN,{ref:t,className:(0,c.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...l,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(F.VF,{children:(0,s.jsx)(V.A,{className:"h-2 w-2 fill-current"})})}),r]})}).displayName=F.hN.displayName,r.forwardRef((e,t)=>{let{className:a,inset:r,...l}=e;return(0,s.jsx)(F.JU,{ref:t,className:(0,c.cn)("px-2 py-1.5 text-sm font-semibold",r&&"pl-8",a),...l})}).displayName=F.JU.displayName,r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(F.wv,{ref:t,className:(0,c.cn)("-mx-1 my-1 h-px bg-muted",a),...r})}).displayName=F.wv.displayName;let I=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{className:"relative w-full overflow-auto",children:(0,s.jsx)("table",{ref:t,className:(0,c.cn)("w-full caption-bottom text-sm",a),...r})})});I.displayName="Table";let T=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("thead",{ref:t,className:(0,c.cn)("[&_tr]:border-b",a),...r})});T.displayName="TableHeader";let H=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("tbody",{ref:t,className:(0,c.cn)("[&_tr:last-child]:border-0",a),...r})});H.displayName="TableBody",r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("tfoot",{ref:t,className:(0,c.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",a),...r})}).displayName="TableFooter";let D=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("tr",{ref:t,className:(0,c.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",a),...r})});D.displayName="TableRow";let E=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("th",{ref:t,className:(0,c.cn)("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",a),...r})});E.displayName="TableHead";let G=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("td",{ref:t,className:(0,c.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",a),...r})});function J(e){var t,a;let{columns:l,data:n}=e,[d,o]=r.useState([]),[i,c]=r.useState([]),[m,u]=r.useState({}),f=(0,R.N4)({data:n,columns:l,onSortingChange:o,onColumnFiltersChange:c,getCoreRowModel:(0,S.HT)(),getPaginationRowModel:(0,S.kW)(),getSortedRowModel:(0,S.h5)(),getFilteredRowModel:(0,S.hM)(),onColumnVisibilityChange:u,state:{sorting:d,columnFilters:i,columnVisibility:m}});return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex items-center py-4",children:[(0,s.jsx)(g.p,{placeholder:"Filter emails...",value:null===(t=f.getColumn("email"))||void 0===t?void 0:t.getFilterValue(),onChange:e=>{var t;return null===(t=f.getColumn("email"))||void 0===t?void 0:t.setFilterValue(e.target.value)},className:"max-w-sm"}),(0,s.jsxs)(_,{children:[(0,s.jsx)(z,{asChild:!0,children:(0,s.jsx)(v.$,{variant:"outline",className:"ml-auto",children:"Columns"})}),(0,s.jsx)(M,{align:"end",children:f.getAllColumns().filter(e=>e.getCanHide()).map(e=>(0,s.jsx)(P,{className:"capitalize",checked:e.getIsVisible(),onCheckedChange:t=>e.toggleVisibility(!!t),children:e.id},e.id))})]})]}),(0,s.jsx)("div",{className:"rounded-md border",children:(0,s.jsxs)(I,{children:[(0,s.jsx)(T,{children:f.getHeaderGroups().map(e=>(0,s.jsx)(D,{children:e.headers.map(e=>(0,s.jsx)(E,{children:e.isPlaceholder?null:(0,R.Kv)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,s.jsx)(H,{children:(null===(a=f.getRowModel().rows)||void 0===a?void 0:a.length)?f.getRowModel().rows.map(e=>(0,s.jsx)(D,{"data-state":e.getIsSelected()&&"selected",children:e.getVisibleCells().map(e=>(0,s.jsx)(G,{children:(0,R.Kv)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,s.jsx)(D,{children:(0,s.jsx)(G,{colSpan:l.length,className:"h-24 text-center",children:"No results."})})})]})})]})}G.displayName="TableCell",r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("caption",{ref:t,className:(0,c.cn)("mt-4 text-sm text-muted-foreground",a),...r})}).displayName="TableCaption",a(30347);var K=a(83449),U=a.n(K),L=a(97331),O=a(58874),B=a(66507),Z=a(40514),q=a(38172),W=a(8310),$=a(92823),X=a(59021),Y=a(68236);let Q=[{title:"Home",url:"#",icon:B.A},{title:"Banners",url:"#",icon:Z.A},{title:"Categories",url:"#",icon:q.A},{title:"Products",url:"#",icon:W.A},{title:"Customers",url:"#",icon:$.A},{title:"Orders",url:"#",icon:X.A},{title:"Settings",url:"#",icon:Y.A}];function ee(){return(0,s.jsx)(O.Sidebar,{className:" bg-primary text-white",children:(0,s.jsx)(O.SidebarContent,{children:(0,s.jsxs)(O.SidebarGroup,{children:[(0,s.jsx)(O.SidebarGroupLabel,{className:" text-lg font-bold ",children:"KARA"}),(0,s.jsx)("hr",{className:"my-[20px]"}),(0,s.jsx)(O.SidebarGroupContent,{children:(0,s.jsx)(O.SidebarMenu,{children:Q.map(e=>(0,s.jsx)(O.SidebarMenuItem,{className:" hover:shadow-lg",children:(0,s.jsx)(O.SidebarMenuButton,{asChild:!0,children:(0,s.jsxs)("a",{href:e.url,children:[(0,s.jsx)(e.icon,{}),(0,s.jsx)("span",{children:e.title})]})})},e.title))})})]})})})}function et(e){let{children:t}=e;return U().className,(0,s.jsx)(L.Provider,{children:(0,s.jsxs)(O.SidebarProvider,{children:[(0,s.jsx)(ee,{}),(0,s.jsxs)("main",{className:"flex flex-col min-h-screen w-full ",children:[(0,s.jsx)(O.SidebarTrigger,{}),t]})]})})}function ea(e){let{formSchema:t,defaultValues:a,fields:r}=n();return(0,s.jsx)(et,{children:(0,s.jsx)("div",{className:" px-main",children:(0,s.jsxs)("div",{className:" flex flex-col gap-4",children:[(0,s.jsx)(w,{title:"Banner",formSchema:t,defaultValues:a,fields:r}),(0,s.jsx)(J,{columns:C,data:[{id:"728ed52f",amount:100,status:"pending",email:"m@example.com"}]})]})})})}function es(){let{setFormSchema:e,setDefaultValues:t,setFields:a}=n();return(0,r.useEffect)(()=>{e(l.z.object({username:l.z.string().min(2,{message:"Username must be at least 2 characters"})})),t({username:"John Doe"}),a([{name:"username",label:"Username",placeholder:"Enter your username"}])},[]),(0,s.jsx)(ea,{data:[{id:"728ed52f",amount:100,status:"pending",email:"m@example.com"}]})}},98986:(e,t,a)=>{"use strict";a.d(t,{J:()=>i});var s=a(95155),r=a(12115),l=a(46195),n=a(31027),d=a(21567);let o=(0,n.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),i=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(l.b,{ref:t,className:(0,d.cn)(o(),a),...r})});i.displayName=l.b.displayName},30347:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[690,844,906,818,548,88,192,864,441,517,358],()=>t(30450)),_N_E=e.O()}]);