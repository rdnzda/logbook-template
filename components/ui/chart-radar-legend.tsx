"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import autoEvaluationData from "@/data/auto-evaluation.json"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A radar chart with English skills"

// Mapping des niveaux CECRL vers des valeurs numériques et couleurs
const cecrToValue: Record<string, number> = {
  "A1": 0,
  "A2": 0,
  "B1": 2,
  "B2": 4,
  "C1": 6,
  "C2": 8,
}

const cecrToColor: Record<string, string> = {
  "A1": "#bae6fd",
  "A2": "#7dd3fc",
  "B1": "#38bdf8",
  "B2": "#0ea5e9",
  "C1": "#0369a1",
  "C2": "#0c4a6e",
}

// Générer chartData à partir du JSON
const chartData = autoEvaluationData.competences.map((comp) => ({
  competence: comp.title,
  niveau: comp.niveau,
  value: cecrToValue[comp.niveau],
  color: cecrToColor[comp.niveau],
}))

const chartConfig = {
  value: {
    label: "Niveau",
    color: "#0284c7",
  }
} satisfies ChartConfig

// Fonction personnalisée pour colorer les grilles selon les niveaux CECRL
const CustomPolarGrid = () => {
  const levels = [
    { value: 20, color: "#e0f2fe", label: "A2" },
    { value: 40, color: "#7dd3fc", label: "B1" },
    { value: 60, color: "#0ea5e9", label: "B2" },
    { value: 80, color: "#0369a1", label: "C1" },
    { value: 100, color: "#0c4a6e", label: "C2" },
  ]

  return (
    <>
      {levels.map((level, index) => (
        <PolarGrid
          key={level.value}
          gridType="circle"
          polarRadius={[level.value]}
          stroke={level.color}
          strokeWidth={3}
          strokeOpacity={0.7}
          fill={level.color}
          fillOpacity={0.15}
        />
      ))}
    </>
  )
}

// Tooltip personnalisé pour afficher les niveaux CECRL avec couleurs
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="rounded-lg border bg-background p-2 shadow-xl">
        <div className="font-medium">{data.competence}</div>
        <div className="flex items-center gap-2 text-sm">
          <div 
            className="w-3 h-3 rounded-full" 
            style={{ backgroundColor: data.color }}
          />
          <span className="text-muted-foreground">
            Niveau: <span className="font-bold" style={{ color: data.color }}>{data.niveau}</span>
          </span>
        </div>
      </div>
    )
  }
  return null
}

export function ChartRadarLegend() {
  const cecrLevels = [
    { label: "A1", color: "#bae6fd" },
    { label: "A2", color: "#7dd3fc" },
    { label: "B1", color: "#38bdf8" },
    { label: "B2", color: "#0ea5e9" },
    { label: "C1", color: "#0369a1" },
    { label: "C2", color: "#0c4a6e" },
  ]

  // Calcul de la moyenne générale (valeurs numériques 1..6)
  const avg = chartData.reduce((sum, d) => sum + (d.value || 0), 0) / chartData.length
  const avgRounded = Number(avg.toFixed(2))

  const avgLabel = (v: number) => {
    if (v < 1.5) return "A1"
    if (v < 2.5) return "A2"
    if (v < 3.5) return "B1"
    if (v < 4.5) return "B2"
    if (v < 5) return "B2-C1"
    if (v < 5.5) return "C1"
    return "C2"
  }

  return (
    <Card className="h-full">
      <CardHeader className="items-center pb-4">
        <CardTitle>Graphique d'Auto-Évaluation en Anglais</CardTitle>
        <CardDescription>
          Évaluation par compétences selon le CECRL
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ChartContainer
          config={chartConfig}
          className="mx-auto max-w-[600px] max-h-[400px]"
        >
          <RadarChart
            data={chartData}
            margin={{
              top: 20,
              bottom: 20,
              right: 20,
              left: 20,
            }}
          >
            <ChartTooltip
              cursor={false}
              content={<CustomTooltip />}
            />
            <PolarAngleAxis 
              dataKey="competence"
              tick={{ fill: '#0c4a6e', fontSize: 12 }}
            />
            <PolarGrid 
              stroke="#000001" 
              strokeWidth={1.5}
              strokeOpacity={0.5}
            />
            <Radar
              dataKey="value"
              fill="#000001"
              fillOpacity={0.8}
              stroke="#000001"
              strokeWidth={1}
              dot={(props: any) => {
                const { cx, cy, payload } = props
                return (
                  <circle
                    cx={cx}
                    cy={cy}
                    r={6}
                    fill={payload.color}
                    stroke="#fff"
                    strokeWidth={2}
                  />
                )
              }}
            />
          </RadarChart>
        </ChartContainer>
        
        {/* Légende des niveaux CECRL */}
        <div className="flex flex-wrap justify-center gap-3 pt-4 border-t">
          {cecrLevels.map((level) => (
            <div key={level.label} className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded-full border-2" 
                style={{ 
                  backgroundColor: level.color,
                  borderColor: level.color,
                }}
              />
              <span className="text-sm font-medium">{level.label}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2 pt-4 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Moyenne générale :
          <span className="text-sm text-muted-foreground">{avgLabel(avg)}</span>
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground flex items-center gap-2 leading-none">
          Évaluation Semestre 1
        </div>
      </CardFooter>
    </Card>
  )
}