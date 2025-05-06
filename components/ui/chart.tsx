import * as React from "react"

interface ChartContainerProps {
  children: React.ReactNode
  data: any[]
  className?: string
}

export const ChartContainer: React.FC<ChartContainerProps> = ({ children, data, className }) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement, { data })
      })}
    </div>
  )
}

interface ChartTitleProps {
  children: React.ReactNode
}

export const ChartTitle: React.FC<ChartTitleProps> = ({ children }) => {
  return <h3 className="text-lg font-semibold mb-2">{children}</h3>
}

interface ChartBarProps {
  x: string
  y: string
  className?: string
  data?: any[]
  yAxisId?: string
}

export const ChartBar: React.FC<ChartBarProps> = ({ x, y, className, data, yAxisId }) => {
  if (!data) {
    return null
  }

  return (
    <>
      {data.map((item, index) => (
        <rect key={index} x={item[x]} y={item[y]} width="10" height="10" className={className} />
      ))}
    </>
  )
}

type ChartTooltipProps = {}

export const ChartTooltip: React.FC<ChartTooltipProps> = () => {
  return null
}

interface ChartLegendProps {
  data: { name: string; color: string }[]
}

export const ChartLegend: React.FC<ChartLegendProps> = ({ data }) => {
  return (
    <div className="flex items-center space-x-4 mt-4">
      {data.map((item) => (
        <div key={item.name} className="flex items-center">
          <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color.replace("fill-", "") }} />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  )
}
