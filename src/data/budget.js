export const budgetTotal = {
  cash: '~$4,000',
  hilton: '510K Hilton pts',
  hyatt: '6K Hyatt pts',
}

export const budgetCategories = [
  {
    category: 'Hotels',
    amount: '$1,340',
    numericAmount: 1340,
    note: '+ points for Waldorf & Georgian',
    color: '#4db8c9',
    items: [
      { label: 'LAX airport hotel', amount: '$120' },
      { label: 'Hotel Bosque del Mar', amount: '$230' },
      { label: 'Waldorf Astoria (5 nights)', amount: '510K Hilton' },
      { label: 'Rio Perdido (3 nights)', amount: '$750' },
      { label: 'The Georgian, Santa Monica', amount: '$240 + 6K' },
    ],
  },
  {
    category: 'Flights',
    amount: '$720',
    numericAmount: 720,
    note: 'All prices for 2 passengers',
    color: '#d96a4f',
    items: [
      { label: 'LAX → Houston → Liberia', amount: '$360' },
      { label: 'Liberia → Los Angeles', amount: '$360' },
    ],
  },
  {
    category: 'Scuba',
    amount: '$600',
    numericAmount: 600,
    note: '2 dives, 5 tanks total',
    color: '#2d5a3d',
    items: [
      { label: 'Catalina Islands (2-tank, 6hr)', amount: '$270' },
      { label: 'Bat Islands (3-tank, 8hr)', amount: '$330' },
    ],
  },
  {
    category: 'Activities',
    amount: '$740',
    numericAmount: 740,
    note: 'Guided tours & excursions',
    color: '#b8942f',
    items: [
      { label: 'Palo Verde boat tour', amount: '$200' },
      { label: 'Rincón de la Vieja', amount: '$200' },
      { label: 'Bijagua birding + Río Celeste', amount: '$200' },
      { label: 'Rio Perdido tubing', amount: '$140' },
    ],
  },
  {
    category: 'Car',
    amount: '$500',
    numericAmount: 500,
    note: 'Suzuki Jimny, 10 days',
    color: '#8a5c3a',
    items: [
      { label: 'Rental (May 15–24)', amount: '$350' },
      { label: 'Parking', amount: '$150' },
    ],
  },
]
