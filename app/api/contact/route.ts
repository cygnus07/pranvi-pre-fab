// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    console.log('Form submission received:', formData);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully (demo mode)',
        data: formData 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json(
      { error: 'Form processing error' },
      { status: 500 }
    );
  }
}