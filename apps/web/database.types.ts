export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      prices: {
        Row: {
          created_at: string
          id: number
          price: number
          product_id: number | null
          store_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          price?: number
          product_id?: number | null
          store_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          price?: number
          product_id?: number | null
          store_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "prices_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "prices_store_id_fkey"
            columns: ["store_id"]
            referencedRelation: "stores"
            referencedColumns: ["id"]
          }
        ]
      }
      products: {
        Row: {
          created_at: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      stores: {
        Row: {
          created_at: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      prices_view: {
        Row: {
          pricescount: number | null
          productscount: number | null
          storescount: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
