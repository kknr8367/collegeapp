import 'package:flutter/material.dart';

class StudentAttendanceScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Student Attendance'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.check_circle, size: 100, color: Colors.teal),
            SizedBox(height: 20),
            Text('Attendance Screen', style: TextStyle(fontSize: 24)),
          ],
        ),
      ),
    );
  }
}
