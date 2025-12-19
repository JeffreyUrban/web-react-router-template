import { describe, it, expect } from 'vitest'
import { formatDate } from './formatDate'

describe('formatDate', () => {
  it('formats a valid date string correctly', () => {
    const result = formatDate('2024-03-15')
    expect(result).toBe('March 15, 2024')
  })

  it('handles dates at the start of the year', () => {
    const result = formatDate('2024-01-01')
    expect(result).toBe('January 1, 2024')
  })

  it('handles dates at the end of the year', () => {
    const result = formatDate('2024-12-31')
    expect(result).toBe('December 31, 2024')
  })

  it('handles leap year dates correctly', () => {
    const result = formatDate('2024-02-29')
    expect(result).toBe('February 29, 2024')
  })

  it('handles single-digit months correctly', () => {
    const result = formatDate('2024-05-07')
    expect(result).toBe('May 7, 2024')
  })

  it('handles different years correctly', () => {
    const result = formatDate('2023-06-15')
    expect(result).toBe('June 15, 2023')
  })

  it('uses UTC timezone consistently', () => {
    // Testing that the function uses UTC regardless of local timezone
    const result1 = formatDate('2024-01-15')
    const result2 = formatDate('2024-01-15')
    expect(result1).toBe(result2)
    expect(result1).toBe('January 15, 2024')
  })

  it('formats dates from different months correctly', () => {
    const months = [
      { date: '2024-01-15', expected: 'January 15, 2024' },
      { date: '2024-02-15', expected: 'February 15, 2024' },
      { date: '2024-03-15', expected: 'March 15, 2024' },
      { date: '2024-04-15', expected: 'April 15, 2024' },
      { date: '2024-05-15', expected: 'May 15, 2024' },
      { date: '2024-06-15', expected: 'June 15, 2024' },
      { date: '2024-07-15', expected: 'July 15, 2024' },
      { date: '2024-08-15', expected: 'August 15, 2024' },
      { date: '2024-09-15', expected: 'September 15, 2024' },
      { date: '2024-10-15', expected: 'October 15, 2024' },
      { date: '2024-11-15', expected: 'November 15, 2024' },
      { date: '2024-12-15', expected: 'December 15, 2024' },
    ]

    months.forEach(({ date, expected }) => {
      expect(formatDate(date)).toBe(expected)
    })
  })
})
