import { ReactNode } from "react";

interface ItemProps {
  child: ReactNode
  value: string
}

function Item({ child, value } : ItemProps){
  return (
    <div className="flex items-center gap-x-1.5">
      {child}
      <span className="font-bold">{value}</span>
    </div>
  )
}

export default Item;