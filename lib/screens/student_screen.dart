import 'package:flutter/material.dart';
import '../student_modules/attendance.dart';
import '../student_modules/time_table.dart';
import '../student_modules/exams.dart';
import '../student_modules/syllabus.dart';

class StudentScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Student Modules'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            ElevatedButton.icon(
              icon: Icon(Icons.check_circle, size: 30),
              label: Text('Attendance'),
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                      builder: (context) => StudentAttendanceScreen()),
                );
              },
            ),
            SizedBox(height: 20),
            ElevatedButton.icon(
              icon: Icon(Icons.schedule, size: 30),
              label: Text('Time-Table'),
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => TimeTableScreen()),
                );
              },
            ),
            SizedBox(height: 20),
            ElevatedButton.icon(
              icon: Icon(Icons.event, size: 30),
              label: Text('Exams'),
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => ExamsScreen()),
                );
              },
            ),
            SizedBox(height: 20),
            ElevatedButton.icon(
              icon: Icon(Icons.book, size: 30),
              label: Text('Syllabus'),
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => SyllabusScreen()),
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}
